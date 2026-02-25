import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ENV } from '../../env';


const _SECRETE = ENV._JWT_SECRETE_KEY;


export const _generateToken = (payload: object): string => {
  return jwt.sign(payload, _SECRETE);
}

export function authMiddlewareToPost(req: Request, res: Response, next: NextFunction): any{
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'INVALID_TOKEN' });
  const token: string = authHeader.split(' ')[1] || "";
  try {
    jwt.verify(token, _SECRETE) as any;
    
    next();
  } catch  {
    
    return res.status(402).json({
      name: 'TOKEN_UNAUTHORIZID',
      message: 'THIS TOKEN JUST WAS EXPIRED OR INVALID PLEASE REQUEST AUTHER'
    });
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): any{
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'INVALID_TOKEN' });
  const token: string = authHeader.split(' ')[1] || "";
  try {
    const decoded = jwt.verify(token, _SECRETE) as any;
    req.body = decoded;
    next();
  } catch  {
    
    return res.status(402).json({
      name: 'TOKEN_UNAUTHORIZID',
      message: 'THIS TOKEN JUST WAS EXPIRED OR INVALID PLEASE REQUEST AUTHER'
    });
  }
}
