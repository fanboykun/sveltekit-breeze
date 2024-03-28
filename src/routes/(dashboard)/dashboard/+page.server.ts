import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getLatestUsers } from "$lib/server/functions/user";
import { getRoleWithUserCount } from "$lib/server/functions/role";

export const load:PageServerLoad = async (event) => {
    if (!event.locals.session) {
        redirect(302, '/');
    }
    const rolesWithUserCount = await getRoleWithUserCount();
    const getUser = await getLatestUsers()
    
    return {
        users: getUser,
        roles: rolesWithUserCount
    }
}