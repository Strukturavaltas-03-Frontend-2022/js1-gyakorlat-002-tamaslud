/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy 
  string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), 
  és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit
  tartalmazzák.
*/
const generateListnemjo = (myArray) => {
  return (
    "<ul>" + myArray.forEach((element) => "<li>" + element + "</li>") + "</ul>"
  );
};


const generateList = (myArray) => `<ul>
                      ${(myArray.map(element => `
                           <li>${element}</li>`)).join('')}
                      </ul>`;

                    


