export const AUTH_BASE_PATH = "/api/auth"

/**
 * Routes accessible to public.
 * Auth not required.
 */
export const PUBLIC_ROUTES = [
  "/"
]

/**
 * The redirect path after logging in.
 */
export const LOGIN_REDIRECT = "/"

/**
 * Auth routes.
 * If logged in - redirect to LOGIN_REDIRECT.
 */
export const AUTH_PFXS = [
  "/auth"
]
export const LOGIN_ROUTE = "/auth/sign-in"

/**
 * Auth API prefix.
 */
export const API_AUTH_PFXS = [
  AUTH_BASE_PATH
]
