// src/routes/+layout.server.ts

// it only runs once
// it runs after hooks.server.ts/js
// You can load data to the frontend and it will be accessible across all child and sibling frontend files.
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
  const { session, user } = await safeGetSession()

  return {
    session,
    user,
    cookies: cookies.getAll(),
  }
}