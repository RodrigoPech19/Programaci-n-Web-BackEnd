import { MongoClient, ObjectId } from 'mongodb';
import { type } from "os";

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            require: [true, 'Favor de ingresar el nombre'],
        },
        edad: {
            type: Number,
            require: [true, 'Favor de ingresar la edad'],
        },
        correo: {
            type: String,
            require: [true, 'Favor de ingresar el correo'],
            unique: true,

        },

    },
    {
        timestamps: true,
    },
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;