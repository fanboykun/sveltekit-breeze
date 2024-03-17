import { redirect, type Actions, type Action, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { findUserById, updateUserProfileInformation } from '$lib/server/functions/user'
import { updateUserProfileValidation } from "$lib/validation";

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
    if(!authUserId) return fail(401, { message: 'Unauthorized' })

    const [ failed, message ] = updateUserProfileValidation(formData)
    if(failed) return fail(400, { errors: message })

    const updatedUser = await updateUserProfileInformation(formData, authUserId)
    if(!updatedUser) return fail(500, {message: 'Internal Server Error'})
    return updatedUser
}

const updateUserPassword:Action = async ({ cookies, request }) => {
    console.log(cookies, request)
}

export const actions:Actions = { updateUserProfile, updateUserPassword }