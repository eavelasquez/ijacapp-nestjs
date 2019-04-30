import { Schema } from 'mongoose';

export const DistrictSchema: Schema = new Schema({
  code: { type: String, required: [true, 'Código - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'], lowercase: true },
  commune: { type: Schema.Types.ObjectId, ref: 'Commune', required: false },
  postal: { type: String, required: false },
  status: { type: Boolean, default: true },
});
