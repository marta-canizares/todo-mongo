import mongoose from 'mongoose';

const notaEsquema = mongoose.Schema({
    contenido: String,
    importante: Boolean,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,  // le digo q el campo usuario solo tiene el campo id
        ref: 'usuario'
    }
})

export default notaEsquema;
