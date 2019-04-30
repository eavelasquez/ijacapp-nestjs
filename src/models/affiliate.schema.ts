import { Schema } from 'mongoose';

export const genders = {
  values: ['masculino', 'femenino', 'indefinido'],
  message: '{VALUE} no es un género existente.',
};

export const AffiliateSchema: Schema = new Schema({
  document: {
    type: { typeDoc: { type: String }, number: { type: Number } },
    required: [true, 'Documento - Dato requerido'], unique: true,
  },
  name: { type: String, required: [true, 'Nombre - Dato requerido'], lowercase: true },
  surname: { type: String, required: [true, 'Apellido - Dato requerido'], lowercase: true },
  telephone: { type: String, required: [true, 'Teléfono - Dato requerido'] },
  address: { type: String, required: false },
  occupation: { type: String, required: false, lowercase: true },
  dateBorn: { type: Date, required: true },
  gender: { type: String, required: false, default: 'indefinido', enum: genders, lowercase: true },
  commit: { type: [{ type: Schema.Types.ObjectId, ref: 'Committee' }], required: false },
  status: { type: Boolean, default: true },
});
