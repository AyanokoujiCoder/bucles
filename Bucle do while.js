// En practica este buble casi no se utiliza pero este buble te permite correr
// tu codigo al menos una vez antes de entrar a la iteracion y es mas elegante que
// utilizar while cuando quieres garantizar que tu codigo corra al menos una vez 

do {
    console.log('una vez');
} while (false);

// Aqui podemos hacer que nos muestre 4 veces corriendo una sola vez
// Este gurpo de odigo va a correr 4 veces y vas a garantizar que al
// menos se corra una vez antes de empezar a iterar 

// let i = 0;
// do {
//     console.log('una vez');
//     i++;
// } while (i < 4);