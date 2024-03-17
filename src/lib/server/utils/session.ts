import { lucia } from "./auth";
import type { Cookies } from "@sveltejs/kit";

export const createUserSession = async (userId: string, cookies: Cookies) => {
    try {
        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
    } catch (error) {
        console.error(error);
    }
}