/** 
 * Expresion Regular 'matchea' cualquier caracter expecial
 * Ejemplo: 
 * 
 * RegExp source: https://regexr.com/2riab
 * 
 * @param {string} str -> String a separar 

*/

export const EspecialCharRgx = /[^\w \xC0-\xFF]+/g;

const exampleStr =
  "...Cadena, con varios carácteres. ¡Es para probar! ¿Funcionará? lo veremos ahorita.@as#%&/()";

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

  return splitStr;
};
