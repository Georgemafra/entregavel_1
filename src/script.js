function Calculadora(expressao) {
  const expressaoLimpa = expressao.trim();
  const operador = expressaoLimpa.match(/[\+\-\*\/\^e]/); // Adicionado 'e' para exponenciação
  
  if (!operador) {
    console.log("Operador inválido");
    return null;
  }

  let [num1, num2] = expressaoLimpa.split(operador[0]).map(parseFloat);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Operandos inválidos");
    return null;
  }

  let resultado;

  switch (operador[0]) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
    case "e": // Adicionado 'e' para exponenciação
      resultado = Math.pow(num1, num2);
      break;
    default:
      console.log("Operador inválido");
      return null;
  }

  return resultado;
}



let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  const resultado = Calculadora(visor.value);

  if (resultado !== null) {
    visor.value = resultado;
  } else {
    visor.value = "Erro na expressão";
  }
}
