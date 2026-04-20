import { registerService } from '../services/user.service.js';

export const register = async (req, res) => {
  const userData = req.body;
  const result = await registerService(userData);

  return res.status(result.status).json({
    message: result.message
  });
};