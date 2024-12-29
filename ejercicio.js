for (let i = 1; i < 6; i++) {
    console.log(i);
    }
    console.log("-----------------")
    
    let colores = ["rojo", "verde", "azul", "amarillo"];
    for (let color of colores) {
    console.log(color);
    }
    console.log("-----------------")
    
    let persona = {
    nombre: "María",
    edad: 27,
    profesion: "diseñadora"
    };
    for (let etiqueta in persona) {
    console.log(etiqueta + ": " + persona[etiqueta]);
    }
    console.log("-----------------")
    
    let m = 1;
    while (m * m < 100) {
    m++;
    if (m * m >= 100) {
    m--;
    console.log("El número más cercano a 100, cuyo cuadrado es menor que 100 es: " + m);
    break;
    }
    }
    console.log("-----------------")
    
    let n = 1
    do {
    if (n % 2 === 0) {
    console.log(n);
    }
    n++;
    } while (n <= 10);