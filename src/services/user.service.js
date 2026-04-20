import userModel from '../models/user.model.js';

export async function registerService(userData) {
  try {
    const User = await userModel();

    const existeUsuario = await User.findOne({ correo: userData.correo });

    if (existeUsuario) {
      return {
        status: 409,
        message: 'Usuario ya existe'
      };
    }

    const nuevoUsuario = new User(userData);
    await nuevoUsuario.save();

    return {
      status: 201,
      message: 'Usuario guardado'
    };
  } catch (error) {
    console.log(error);

    return {
      status: 500,
      message: 'Error al guardar usuario'
    };
  }
}