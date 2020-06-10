import mongoose from 'mongoose';

const notaEsquema = mongoose.Schema({
    contenido:String,
    importante:Boolean
})

export default notaEsquema;
