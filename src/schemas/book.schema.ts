import { Schema } from 'mongoose';

export const BookSchema: Schema = new Schema({
  code: { type: Number, required: [true, 'Código - Dato requerido'], unique: true },
  version: { type: Number, required: false, default: '1.0' },
  created: { type: Date, required: [true, 'Fecha de creación - Dato requerido'] },
  finalize: { type: Date, required: false },
  approved: { type: Boolean, required: false, default: false },
  communityAction: { type: Schema.Types.ObjectId, ref: 'CommunityAction', required: false },
  affiliates: { type: [{ type: Schema.Types.ObjectId, ref: 'Affiliate' }], required: false },
  status: { type: Boolean, default: true },
});
