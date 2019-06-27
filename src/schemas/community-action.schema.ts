import { Schema } from 'mongoose';

export const CommunityActionSchema: Schema = new Schema({
  code: { type: String, required: [true, 'Código - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'] },
  telephone: { type: String, required: false },
  email: { type: String, required: false, unique: true, lowercase: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: { type: [{type: Schema.Types.ObjectId, ref: 'Member'}], required: [false, 'Miembros - Datos necesarios'] },
  district: { type: Schema.Types.ObjectId, ref: 'District', required: [false, 'Barrio - Dato requerido'] },
  committees: { type: [{type: Schema.Types.ObjectId, ref: 'Committee'}], required: false },
  affiliates: { type: [{type: Schema.Types.ObjectId, ref: 'Affiliate'}], required: false },
  status: { type: Boolean, default: true },
})