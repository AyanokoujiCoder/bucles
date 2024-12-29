// Este tipo de bucle es muy parecido al bucle for de que en este bucle
// tu vas a interar muchisimas veces hasta que encuentres una solución
// que hagan que ese bucle parent.

// let i = 0;

// while (i < 100) {
//     console.log(i);
//     i++;
// }

// ¿Para que tengo este buble si ya tengo el bucle for?

// La diferencia en que en el otro sabiamos sabiamos a que numero queriamos
// llegar, aqui tambien pero se utiliza mas en situaciones en donde no sabemos a que numero llegar 

let lista = [3,6,4,8,2,9,4,7,6,1,0,33,8,9,3,546,7,87];

let numero = 0;
// Queremos indicar que este numero es menos a 30
while (numero < 30) {
    numero = lista.shift();
    console.log(numero);
}
console.log(lista);