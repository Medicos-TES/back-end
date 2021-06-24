import { Schema, model } from "mongoose";

const medicoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME é obrigatório!"],
    },
    crm: {
      type: String,
      required: [true, "O campo CRM é obrigatório!"],
    },
    especialidade: {
      type: String,
      required: [true, "O campo ESPECIALIDADE é obrigatório!"],
    },
  },
  {
    timestamps: { createdAt: "criadoEm" },
  }
);

export default model("Medico", medicoSchema);
