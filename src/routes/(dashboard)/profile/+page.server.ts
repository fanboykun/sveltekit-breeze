import { redirect, type Actions, type Action, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { deleteUser, findUserById, getUserPassword, updateUserHashedPassword, updateUserProfileInformation } from '$lib/server/functions/user'
import { updateUserProfilePasswordValidation, updateUserProfileValidation } from "$lib/validation/index.server";
import { lucia } from "$lib/server/utils/auth";

export const load:PageServerLoad = async (event) => {
    if (!event.locals.session) {
        redirect(302, '/');
    }
    const authUser = await findUserById(event.locals.session.userId)
    return {
        authUser: authUser
    }
}


const updateUserProfile:Action = async (event) => {
    const formData = await event.request.formData()
    const authUserId = event.locals.session?.userId
    if(!authUserId) return fail(401, { message: 'Unauthorized', success: false })

    const [ failed, message ] = updateUserProfileValidation(formData)
    if(failed) return fail(400, { errors: message, success: false })

    const updatedUser = await updateUserProfileInformation(formData, authUserId)
    if(!updatedUser) return fail(500, {message: 'Internal Server Error', success: false})
    return { updatedUser, success: true }
}

const updateUserPassword:Action = async (event) => {
    const formData = await event.request.formData()
    const user = event.locals.user
    if(user == null) return fail(400, { message: 'User Not Found', success: false })

    const userPassword = await getUserPassword(user)
    if(userPassword == null) return fail(400, { message: 'User Password Not Found', success: false })

    const [ failed, message ] = await updateUserProfilePasswordValidation(formData, userPassword.hashed_password)
    if(failed) return fail(400, { errors: message, success: false })

    const updatedUserPassword = await updateUserHashedPassword(user.id, formData.get('new_password') as string)
    return { updatedUserPassword, success: true }
}

const deleteAccount:Action = async (event) => {
    const session = event.cookies.get(lucia.sessionCookieName)
    const userId = event.locals.session?.userId
    if(!session||!userId) return fail(401, {  success: false, message: 'Unauthorized' })

    const user = await findUserById(userId)
    if(!user) return fail(400, { success: false, message: 'User Not Found!' } )

    const userDeletion = await deleteUser(user.id)
    if(!userDeletion) return fail(500, { success: false, message: 'Internal Server Error' } )

    await lucia.invalidateSession(session);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
        path: ".",
        ...sessionCookie.attributes
    });
    
    return redirect(302, '/')
}

export const actions:Actions = { updateUserProfile, updateUserPassword, deleteAccount }