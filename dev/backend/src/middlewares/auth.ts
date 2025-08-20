import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthReq extends Request {
  user?: { id: string; role: 'admin' | 'member' };
}

export const protect =
  (roles: Array<'admin' | 'member'> = ['admin', 'member']) =>
  (req: AuthReq, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token' });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
        role: 'admin' | 'member';
      };
      if (!roles.includes(decoded.role))
        return res.status(403).json({ msg: 'Forbidden' });
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ msg: 'Invalid token' });
    }
  };


