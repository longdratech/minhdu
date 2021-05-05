import * as jwt from 'jsonwebtoken';

export async function verifyToken(token: string) {
  try {
    return jwt.verify(token, 'wrong-secret');
  } catch (err) {
    throw 'Invalid';
  }
}