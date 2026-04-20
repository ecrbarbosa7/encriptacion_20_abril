import express from 'express';
import userRoutes from './src/routes/user.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'Endpoint de prueba', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
