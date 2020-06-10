import mongoose from 'mongoose';
import esquema from './esquema.js';

const Modelo = mongoose.model('nota',esquema);

export default Modelo;