/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
      var aPadre=[]; var c=0;
      for (var Prop in objeto) {
         var aHijo=[]
         aHijo[0]=Prop; aHijo[1]=objeto[Prop];
         aPadre[c]=aHijo; 
         c++;
   }
   return aPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arrayString=string.split(''); var arrayOrd=arrayString.sort(); 
   var obj={}; var c=0; 
   for (var i = 0; i < arrayOrd.length; i++){
     if(i===0 || arrayOrd[i]===arrayOrd[i-1]){c++;}
     else{obj[arrayOrd[(i-1)]]=c; c=1; continue;}
   }
   obj[arrayOrd[i-1]]=c;
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      var arrayString=string.split(''); var aStringOrd=[]
        for (var i = 0; i < arrayString.length; i++) {
         if(arrayString[i].toUpperCase()===arrayString[i]){aStringOrd.push(arrayString[i]);}}
        for (var j=0; j < arrayString.length; j++) {
         if(arrayString[j].toLowerCase()===arrayString[j]){aStringOrd.push(arrayString[j]);}}
        var stringOrd=aStringOrd.join('');
        return stringOrd;
        
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayFrase=frase.split(' '); var Str=[];
  for (let i = 0; i < arrayFrase.length; i++) {
    var elementArray=arrayFrase[i].split('');
    var revElement=elementArray.reverse(); var revStr=revElement.join('');
    Str.push(revStr);
  }
   return Str.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var c=0;
   var numStr=String(numero); var arrayStr=numStr.split('');
   var arrayNum=arrayStr.map(function(str){return Number(str);}); 
   var Num1=arrayNum.join('');   
   var revNum=arrayNum.reverse(); var Num2=revNum.join('');
   if(Num1===Num2){return "Es capicua"}
   else{return "No es capicua"}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrStr=string.split('');
   for (let i = 0; i < arrStr.length; i++) {
      if(arrStr[i]==="a" || arrStr[i]==="b" || arrStr[i]==="c"){arrStr.splice(i,1,"");}
   }
   var Str=arrStr.join('');
   return Str;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //var auxArray=arrayOfStrings.sort();
   var neoArray=arrayOfStrings.sort(function(a,b){return a.length-b.length;})
   return neoArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var neoArray=[];
   for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++) {
         if(array1[i]===array2[j]){neoArray.push(array1[i]);}
      }
   }
   return neoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
