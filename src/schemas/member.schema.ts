import { Schema } from 'mongoose';

export const positions = {
  values: ['presidente', 'vicepresidente', 'secretario', 'tesorero'],
  message: '{VALUE} no existe esa posición.',
};

export const MemberSchema: Schema = new Schema({
  document: {
    type: { typeDoc: String, number: Number },
    required: [true, 'Documento - Dato requerido'], unique: true
  },
  name: { type: String, required: [true, 'Nombre - Dato requerido'], lowercase: true },
  surname: { type: String, required: [true, 'Apellido - Dato requerido'], lowercase: true },
  telephone: { type: String, required: [true, 'Teléfono - Dato requerido'] },
  occupation: { type: String, default: 'secretario', enum: positions, required: [true, 'Ocupación - Dato requerido'], lowercase: true },
  status: { type: Boolean, default: true },
});
