const inputValor = document.getElementById("valor");
const selectDe = document.getElementById("de");
const selectPara = document.getElementById("para");
const btnConverter = document.getElementById("converter");
const resultado = document.getElementById("resultado");
const historico = document.getElementById("historico");
const btnLimpar = document.getElementById("limpar");

btnConverter.addEventListener("click", () => {
  const valor = Number(inputValor.value);
  const de = selectDe.value;
  const para = selectPara.value;

  if (isNaN(valor)) {
    resultado.textContent = "Por favor, digite um número válido.";
    return;
  }

  if (de === para) {
    resultado.textContent = `Resultado: ${valor.toFixed(2)}° (${de})`;
    adicionarAoHistorico(`${valor}°${formatarUnidade(de)} → ${valor.toFixed(2)}°${formatarUnidade(para)}`);
    return;
  }

  let convertido;

  if (de === "celsius" && para === "fahrenheit") {
    convertido = (valor * 9/5) + 32;
  } else if (de === "fahrenheit" && para === "celsius") {
    convertido = (valor - 32) * 5/9;
  } else if (de === "celsius" && para === "kelvin") {
    convertido = valor + 273.15;
  } else if (de === "kelvin" && para === "celsius") {
    convertido = valor - 273.15;
  } else if (de === "fahrenheit" && para === "kelvin") {
    convertido = (valor - 32) * 5/9 + 273.15;
  } else if (de === "kelvin" && para === "fahrenheit") {
    convertido = (valor - 273.15) * 9/5 + 32;
  }

  resultado.textContent = `Resultado: ${convertido.toFixed(2)}° (${para})`;

  adicionarAoHistorico(`${valor}°${formatarUnidade(de)} → ${convertido.toFixed(2)}°${formatarUnidade(para)}`);
});

btnLimpar.addEventListener("click", () => {
  historico.innerHTML = "<strong>Histórico:</strong>";
});

function adicionarAoHistorico(texto) {
  const p = document.createElement("p");
  p.textContent = texto;
  historico.appendChild(p);
}

function formatarUnidade(unidade) {
  if (unidade === "celsius") return "C";
  if (unidade === "fahrenheit") return "F";
  if (unidade === "kelvin") return "K";
}
