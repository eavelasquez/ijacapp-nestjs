import { Schema } from 'mongoose';

export const CommitteeSchema: Schema = new Schema({
  code: { type: String, required: [true, 'Código - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'],  lowercase: true },
  affiliates: { type: [{ type: Schema.Types.ObjectId, ref: 'Affiliate' }], required: false },
  description: { type: String, required: false },
  status: { type: Boolean, default: true },
});
