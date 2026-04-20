import { createUser } from '../models/user.model.js';

export const registerService = (userData) => {
  const result = createUser(userData);
  return result;
};