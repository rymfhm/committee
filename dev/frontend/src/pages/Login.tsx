import { useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [form, set] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const { data } = await api.post('/auth/login', form);
      login(data.token);
    } catch (err: any) {
      setError(err.response?.data?.msg || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={submit} className="space-y-4 bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-center">Committee Portal</h1>
        <p className="text-gray-600 text-center mb-4">Sign in to your account</p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <input
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={e => set({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={form.password}
          onChange={e => set({ ...form, password: e.target.value })}
          required
        />
        <button 
          type="submit" 
          className="btn-primary w-full" 
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
        
        <div className="text-sm text-gray-600 text-center">
          <p>Test Credentials:</p>
          <p>Admin: admin@test.com / password</p>
          <p>Member: member1@test.com / password</p>
        </div>
      </form>
    </div>
  );
}


