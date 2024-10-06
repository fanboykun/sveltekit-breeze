import { fail, type Action, type Actions, redirect } from "@sveltejs/kit";
import { createUser } from "$lib/server/functions/user";
import { createUserValidation } from "$lib/validation/index.server";
import { createUserSession } from "$lib/server/utils/session";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async (event) => {
    if (event.locals.session) {
        redirect(302, "/dashboard");
    }
}

const register: Action = async ({ cookies, request }) => {
    const data = await request.formData();
    const [ fails, result ] = createUserValidation(data)

    if(fails) return fail(400, { message: 'Validation failed', errors: result, success: false })
    
    const newUser = await createUser({ 
            email: data.get('email') as string, 
            name: data.get('name') as string, 
            password: data.get('password') as string,      
        })

    if(!newUser) return fail(500, { message: 'Failed to create user', success: false })
    await createUserSession(newUser.id, cookies)
    redirect(302, "/dashboard");
}

export const actions: Actions = { register }