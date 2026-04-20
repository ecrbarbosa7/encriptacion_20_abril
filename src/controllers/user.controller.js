import { registerService } from '../services/user.service.js';

export const register = (req, res) => {
  const userData = req.body;
  const result = registerService(userData);
  res.json(result);
};