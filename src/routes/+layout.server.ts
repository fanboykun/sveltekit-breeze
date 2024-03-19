import type { LayoutServerLoad } from './$types'

export const ssr = true
export const prerender = false
// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.user,
  }
}

