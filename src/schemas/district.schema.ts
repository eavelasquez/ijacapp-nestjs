import { Schema } from 'mongoose';

export const DistrictSchema: Schema = new Schema({
  code: { type: String, required: [true, 'Código - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'] },
  commune: { type: Schema.Types.ObjectId, ref: 'Commune', required: true },
  postal: { type: String, required: false },
  status: { type: Boolean, default: true },
});
