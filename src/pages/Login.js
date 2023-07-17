import { Form, useLoaderData, redirect, useNavigation } from 'react-router-dom';
import { loginUser } from '../api/api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const redirectTo = new URL(request.url).searchParams.get('redirect');

  try {
    const data = await loginUser({ email, password });
    console.log(data);
    localStorage.setItem('loggedIn', true);
    return redirect(redirectTo);
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
      <div className="login-container">
        <h1>Sign in to your account</h1>
        {message && <h3 className="red">{message}</h3>}

        <Form method="post"
              className="login-form">
          <input name="email"
                 type="email"
                 placeholder="Email address" />
          <input name="password"
                 type="password"
                 placeholder="Password" />
          <button disabled={navigation.state === 'submitting'}>
            {navigation.state === 'submitting'
                ? 'Logging in...'
                : 'Log in'
            }
          </button>
        </Form>
      </div>
  );
}
