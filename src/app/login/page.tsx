'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'didier@gmail.com' && password === 'didier123') {
      sessionStorage.setItem('auth', 'true');
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-green-700 mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
        <p className="text-sm mt-2">
          Don’t have an account? <a href="/signup" className="text-green-700">Sign up</a>
        </p>
      </div>
    </div>
  );
}
