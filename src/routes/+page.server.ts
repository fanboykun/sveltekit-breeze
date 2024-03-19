import { redirect, type Action, type Actions } from "@sveltejs/kit";

const gotoLogin: Action = async (event) => {
    if(event.locals.user) return redirect(302, '/dashboard')
    return redirect(302, '/login')
}

const gotoRegister: Action = async (event) => {
    if(event.locals.user) return redirect(302, '/dashboard')
    return redirect(302, '/register')
}

export const actions: Actions = { gotoLogin, gotoRegister }

