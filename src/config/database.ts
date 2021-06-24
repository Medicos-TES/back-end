import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@prova1.a9elm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((erro) => {
    console.log(`Falha ao conectar com o banco de dados: ${erro}`);
  });

export { mongoose };
