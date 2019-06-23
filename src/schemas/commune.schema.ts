import { Schema } from 'mongoose';

export const zones = {
  values: ['Nororiental', 'Noroccidental', 'Centro oriental', 'Centro occidental', 'Suroriental', 'Suroccidental', 'Ninguna'],
  message: '{VALUE} no está registrada',
};

export const CommuneSchema: Schema = new Schema({
  code: { type: String, required: [true, 'Número - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'] },
  zone: { type: String, enum: zones, default: 'Ninguna', required: [true, 'Zona - Dato requerido'] },
  districts: { type: [{type: Schema.Types.ObjectId, ref: 'District' }], required: false },
  status: { type: Boolean, default: true },
});
