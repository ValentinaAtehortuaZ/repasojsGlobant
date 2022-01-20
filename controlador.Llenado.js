
//arreglo de objetos
let productos = [

    { nombre: "Aguardiente tapa roja", tamano: "1/2 botella", precio: 200000, foto: "img/tapa-roja.png" },
    { nombre: "Aguardiente tapa azul", tamano: "1/2 botella", precio: 220000, foto: "img/Aguardientetapaazul.jpg" },
    { nombre: "Tequila don julio", tamano: "1 botella", precio: 300000, foto: "img/don-julio.jpg" },
    { nombre: "Cerveza Aguila", tamano: "1 botella", precio: 8000, foto: "img/aguila-cerveza.png" },
    { nombre: "Cerveza Pilsen", tamano: "1 botella", precio: 7000, foto: "img/pilsen-botella.png" },
    { nombre: "Ron Medellin", tamano: "1/2 botella", precio: 220000, foto: "img/ronmedellin.jpg" },
    { nombre: "Ron Añejo  220 años De Caldas", tamano: "1/2 botella", precio: 100000, foto: "img/viejo_de_caldas.jpg" },
    { nombre: "Agua", tamano: "1 botella", precio: 4000, foto: "img/agua.jpg" },
    { nombre: "Soda", tamano: "1 botella", precio: 4000, foto: "img/Soda.jpg" },
    { nombre: "Gatorade", tamano: "1 botella", precio: 9000, foto: "img/gatore.jpg" },


]

let productos2 = [1, 2, 3, 4, 5, 6]

// crear una referencia a la etiqueta fija

let fila = document.getElementById("fila")

// Recorrer eñ arreglo y sacarle fotocopia a la informacion que hay por dentro

productos.forEach(function (producto) {

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src = producto.foto



    let nombreProducto = document.createElement("h3")
    nombreProducto.classList.add("text-danger")
    nombreProducto.textContent = producto.nombre
   


    let tamanoProducto = document.createElement("h4")
    tamanoProducto.textContent = producto.tamano

    let precioProducto = document.createElement("h4")
    precioProducto.textContent = producto.precio



    //padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(tamanoProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})