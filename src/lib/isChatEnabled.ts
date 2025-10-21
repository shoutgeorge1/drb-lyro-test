/**
 * Utility function to check if chat should be enabled
 * @param pathname - Current pathname
 * @param searchParams - URL search parameters
 * @returns boolean indicating if chat should be enabled
 */
export function isChatEnabled(pathname: string, searchParams: URLSearchParams): boolean {
  // Enable chat on /chat-test route
  if (pathname === '/chat-test') {
    return true;
  }
  
  // Enable chat when ?chat=1 is present
  if (searchParams.get('chat') === '1') {
    return true;
  }
  
  return false;
}
