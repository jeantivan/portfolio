/** 
 * Expresión Regular para encontrar cualquier carácter especial
 * en un cadena de texto
 * 
 * Ejemplo: 
 * 
 * RegExp source: https://regexr.com/2riab
 * 
 * @param {string} str -> String a separar 

*/

export const EspecialCharRgx = /[^\w \xC0-\xFF]+/g;

// str: string, rgx?: RegExp = EspecialCharRgx
export const splitEspecialChar = (
  str: string,
  rgx: RegExp = EspecialCharRgx
) => {
  // Acá se guardará el string dividido
  let splitStr = [];

  // Copia del string a dividir
  let currStr = str;

  // Cadena separada sin incluir los caracteres especial.
  while (currStr.search(rgx) >= 0) {
    // Carácter en el index
    let indexOfEspChar = currStr.search(rgx);

    // No agrega
    if (indexOfEspChar !== 0) {
      // Añade la string que está antes del carácter
      splitStr.push(currStr.slice(0, indexOfEspChar));
    }

    // Añade el signo el carácter al array
    splitStr.push(currStr[indexOfEspChar]);

    // Cambia el valor de la cadena actual hasta donde se encontró el carácter
    currStr = currStr.slice(indexOfEspChar + 1);
  }

  // Añade el restante de la string si no terminaba con carácter especial.
  if (currStr.length > 0) {
    splitStr.push(currStr);
  }

  return splitStr;
};

/* 
const splitEspecialChar = (str, rgx = /[^\w \xC0-\xFF]+/g) => {
  // Acá se guardará el string dividido
  let splitStr = [];

  // Copia del string a dividir
  let currStr = str;

  // Cadena separada sin incluir los caracteres especial.
  while (currStr.search(rgx) >= 0) {
    // Carácter en el index
    let indexOfEspChar = currStr.search(rgx);

    // No agrega
    if (indexOfEspChar !== 0) {
      // Añade la string que está antes del carácter
      splitStr.push(currStr.slice(0, indexOfEspChar));
    }

    // Añade el signo el carácter al array
    splitStr.push(currStr[indexOfEspChar]);

    // Cambia el valor de la cadena actual hasta donde se encontró el carácter
    currStr = currStr.slice(indexOfEspChar + 1);
  }

  console.log("CurrStr Length: " + currStr.length)
  return splitStr;
}; 
*/
