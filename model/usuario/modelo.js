import mongoose from 'mongoose';
import esquema from './esquema.js';

const Modelo = mongoose.model('usuario',esquema);

export default Modelo;