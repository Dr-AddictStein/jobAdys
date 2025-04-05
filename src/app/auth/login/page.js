'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import styles from '@/styles/AUTH/Login.module.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuth();
  const router = useRouter();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      const role = user.role?.toLowerCase();
      switch (role) {
        case 'admin':
          router.push('/admin');
          break;
        case 'submitter':
          router.push('/submitter');
          break;
        case 'performer':
          router.push('/performer');
          break;
        default:
          router.push('/');
      }
    }
  }, [user, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/API/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('content-type');
      let data;

      if (contentType?.includes('application/json')) {
        data = await res.json();
        console.log('Login Response:', data);
      } else {
        const text = await res.text();
        console.error('Unexpected response:', text);
        setLoading(false);
        return setError('Unexpected server response');
      }

      if (!res.ok) {
        setLoading(false);
        return setError(data?.error || 'Login failed');
      }

      // Store user data in the AuthContext
      login(data);

      // Redirect based on user role (case-insensitive)
      const role = data?.user?.role?.toLowerCase() || '';

      switch (role) {
        case 'admin':
          router.push('/admin');
          break;
        case 'submitter':
          router.push('/submitter');
          break;
        case 'performer':
          router.push('/performer');
          break;
        default:
          router.push('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Left Panel */}
        <div className={styles.left}>
          <Image src="/logotypeH.svg" alt="JobAdys Logo" width={154} height={50} />
          <p className={styles.description}>
            JobAdys is a freelancing social networking platform helping professionals connect and collaborate remotely.
          </p>
          <Image src="/heroImage.svg" alt="Illustration" width={300} height={200} />
        </div>

        <hr className={styles.Bdivider} />

        {/* Right Panel */}
        <div className={styles.right}>
          <div className={styles.topRow}>
            <h2 className={styles.heading}>Sign in</h2>
            <Link href="/auth/registration" className={styles.signupLink}>Sign up</Link>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className={styles.input}
              value={form.password}
              onChange={handleChange}
            />

            <div className={styles.extraRow}>
              <label className={styles.remember}>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className={styles.forgotLink}>Forgot Password?</Link>
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
