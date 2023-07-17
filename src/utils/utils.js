import { redirect } from 'react-router';

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem('loggedIn');
  const redirectString = request ? `&redirect=${new URL(request.url).pathname}` : '';

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first${redirectString}`);
  }

  return null;
}
