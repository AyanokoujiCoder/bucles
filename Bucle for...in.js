// A diferencia de este buble es mejor para objetos, los otros bubles son buenos para listas
// porque las listas tienen un orden y esos otros bucles respetan el orden y podemos
// utilizarlo en objetos ya que los objetos normalmente no estan ordenados.

let traductor = {
    buble: 'loop',
    lista: 'array',
    declaracion: 'declaration',
    objeto: 'objeto'
}

// Pondremos "key" o llave que esto representa estas etiquetas de arriba. Le pondremos "etiqueta"

for (let etiqueta in traductor) {
    console.log(etiqueta + ' en ingles es ' + traductor[etiqueta]);
}

// Muchas veces van a parecer en orden pero eso no esta garantizado por eso no es buena idea utilizar
// esto al menos cuando tienes objetos muy grandes es posible que estos no vengan en orden.

