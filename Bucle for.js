// Veremos la parte muy importante de cualquier lenguaje de programacion y estos son los bubles.
// Los bucles te permiten reducir la cantidad de codigo que haces manualmente cuando tienes que ir
// por muchos elementos al mismo tiempo y realizar la misma acción.

// Declaramos una variable "let" puede ser cualquier nombre pero normalmente utilizamos "i"
// vamos a iniciar i con el valor de cero y despues indicamos la condicion que va a hacer que nuestro
// buble continue o se detenga. Quiero que mi bucle continue siempre y cuando sea menor a 10.

// Vamos a poner "i" va aumentar uno, adentro de las llaves escribimos cualquier situacion que queremos que
// suceda en cada iteracion dentro de estos. Si queremos que llegue hasta "10" usamos "<=".

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Podriamos cambiar la condicion a cada iteracion por ejemplo: 

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// Tenemos: 6, 8, 10

// let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i] + ' es un animal');
// }

// Podemos imprimir en 0.2 segundos estos numeros con el siguiente codigo:

for (let i = 0; i < 10000; i ++) {
    console.log(i);
}