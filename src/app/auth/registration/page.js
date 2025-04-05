'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/AUTH/Registration.module.css';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: '', repeatPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('/API/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      });

      const data = await res.json();
      console.log('API Response:', data);

      if (!res.ok) return setError(data.error || 'Registration failed');

      window.location.href = '/auth/login';
    } catch (err) {
      setError('Something went wrong.');
      console.error(err);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src="/logotypeH.svg" alt="Logo" width={154} height={50} />
          <p className={styles.description}>
            JobAdys is a freelancing social networking platform helping professionals connect and collaborate remotely.
          </p>
          <img src="/heroImage.svg" alt="Illustration" width={300} height={200} />
        </div>

        <hr className={styles.Bdivider} />

        <div className={styles.right}>
          <div className={styles.topRow}>
            <h2 className={styles.heading}>Sign up</h2>
            <Link href="/auth/login" className={styles.signinLink}>Sign in</Link>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <select name="role" value={form.role} onChange={handleChange} required className={styles.input}>
              <option value="">Select role</option>
              <option value="submitter">Submitter</option>
              <option value="performer">Performer</option>
            </select>

            <input type="text" name="name" placeholder="Full Name" className={styles.input} value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className={styles.input} value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className={styles.input} value={form.password} onChange={handleChange} required />
            <input type="password" name="repeatPassword" placeholder="Repeat Password" className={styles.input} value={form.repeatPassword} onChange={handleChange} required />

            <label className={styles.checkboxWrapper}>
              <input type="checkbox" required className={styles.checkbox} />
              <span>I agree to the JobAdys <Link href="/terms" className={styles.link}>Terms & Conditions</Link>.</span>
            </label>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button type="submit" className={styles.submitButton}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export const runtime = 'edge';
