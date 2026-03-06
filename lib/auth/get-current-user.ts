// Authentication is disabled - all users are anonymous
export async function getCurrentUser() {
  return null
}

export async function getCurrentUserId() {
  // Always return anonymous user - authentication is disabled
  return 'anonymous-user'
}
