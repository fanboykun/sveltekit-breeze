import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals, url: { pathname } }) => {
  return {
    user: locals.user,
    pathname
  }
}

