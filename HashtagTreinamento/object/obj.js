const documentoIdentidade = {
  nome: "keven",
  sobrenome: "christian",
  cpf: "129.56.345.23",
  empresa: "google",
  idade: 20,
};

// duas maneiras de mostrar um objeto
console.log(documentoIdentidade["nome"]);
console.log(documentoIdentidade.nome);

// modificando propriedade do objeto
documentoIdentidade.nome = "Fernanda";
console.log(documentoIdentidade.nome);
