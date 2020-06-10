import mongoose from 'mongoose';

const usuarioEsquema = mongoose.Schema({
    email:String,
    usuario:String,
    password:String
})

export default usuarioEsquema;
