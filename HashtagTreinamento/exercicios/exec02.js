console.log("exec 01\n");

const valorMedia = 3;
const valorMediaFinal = 2;
let fator = 100;

function notaMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / valorMedia;
  if (media < 6) {
    console.log(
      `nota na media: ${
        Math.round(media * fator) / fator // poderia usar .toFixed(2)
      } o aluno não alcançou a media.`
    );
  } else {
    console.log(
      `nota na media: ${Math.round(media * fator) / fator}, o aluno passou.`
    );
  }
  return media;
}

function mediaComFinal(media, nota4) {
  let mediaComFinal = (media + nota4) / valorMediaFinal;
  console.log(
    `Com a nota da prova final: ${nota4}, o aluno ficou com a media: ${
      Math.round(mediaComFinal * fator) / fator
    }`
  );
  return mediaComFinal;
}

const notaNaMedia = notaMedia(7, 3, 7);
const notaNaFinal = mediaComFinal(notaNaMedia, 7);

// Exercicio Temperatura
console.log("\nexec 02\n");

const grausCelsius = 25;

function convercaoTemperaturaFarenheit(grausCelsius) {
  let temperaturaFarenheit = (9 / 5) * grausCelsius + 32;
  console.log(
    `a temperatura em graus Celsius: ${grausCelsius}, é correspondente a ${temperaturaFarenheit} Farenheit.`
  );
}

convercaoTemperaturaFarenheit(grausCelsius);

// Exercicio Imposto
console.log("\nexec 03\n");

function calcularImposto(valorProduto, valorTaxa) {
  const valorProdutoComTaxa = (valorProduto * valorTaxa) / 100
  return valorProdutoComTaxa
}

let valorProduto = 176
let valorTaxa = 8.875


const valorTotalComImposto = calcularImposto(valorProduto, valorTaxa)
console.log(`valor do produto com a taxa de imposto é: ${valorTotalComImposto}`);

