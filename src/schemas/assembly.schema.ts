import { Schema } from 'mongoose';

export const AssemblySchema: Schema = new Schema({
  code: { type: Number, required: [true, 'Código - Dato requerido'], unique: true },
  description: { type: String, required: false },
  date: { type: Date, required: [true, 'Fecha - Dato requerido'] },
  member: { type: Schema.Types.ObjectId, ref: 'Member', required: [true, 'Miembro - Dato necesario'] },
  duration: { type: Number, required: false },
  participants: { type: [{ type: Schema.Types.ObjectId, ref: 'Affiliate' }], required: false },
});
