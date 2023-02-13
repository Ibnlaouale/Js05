//Declaration d'un tableau
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tableau;

// La fontion prend en parametre le tableau et convertie les element du tableau en string

function numberToString(tableau){ 
  
  tableau[0] = "un";
  tableau[1] = "deux";
  tableau[2] = "trois";
  tableau[3] = "quatre";
  tableau[4] = "cinq";
  tableau[5] = "six";
  tableau[6] = "sept";
  tableau[7] = "huit";
  tableau[8] = "neuf";
  tableau[9] = "dix";
  console.log(tab);
}
numberToString(tab);
//let tab2 = ['a','b','c','d','e','f','g','h','i','j'];
//let tab3=[6];
//numberToString (tab2);
//numberToString(tab3);
module.exports = numberToString;