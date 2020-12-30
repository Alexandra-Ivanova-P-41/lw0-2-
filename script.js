function calculator(calcString) {
  calcString = calcString.replace(/ /g, "");
  if (!checkCalcString(calcString)) {
    return false;
  }
  return eval(calcString);
}

function checkCalcString(string) {
  if (string.indexOf("/0") !== -1) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (!isSymbol(string[i]) && isNaN(Number(string[i]))) {
      return false;
    }
  }
  return true;
}

function isSymbol(symbol) {
  if (symbol !== "+" && symbol !== "-" && symbol !== "/" && symbol !== "*" && symbol !== "(" && symbol !== ")") {
    return false;
  }
  return true;
}
let string = "(2+1)/1*5f";
console.log(calculator(string));