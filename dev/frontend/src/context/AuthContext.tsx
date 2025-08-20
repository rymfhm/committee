import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import jwtDecode from 'jwt-decode';

type User = { id: string; role: 'admin' | 'member'; name: string };

interface AuthCtx {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const Ctx = createContext<AuthCtx>({} as AuthCtx);
export const useAuth = () => useContext(Ctx);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    const decoded: any = jwtDecode(token);
    setUser({ id: decoded.id, role: decoded.role, name: decoded.name });
  };
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) login(t);
  }, []);

  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>;
};


