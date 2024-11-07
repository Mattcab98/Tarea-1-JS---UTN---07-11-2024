            // TAREA - MATIAS ALVAREZ

// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

var esParImpar = (num) => {
    let numeros = [];
    for (var i=0; i< num.length; i++) {
        if (num[i]%2 ===0) {
        console.log(`El numero ${num[i]} es par`);
        document.write(`El numero ${num[i]} es par <br>`);
        }
        else {
        console.log(`El numero ${num[i]} es impar`);
        document.write(`El numero ${num[i]} es impar <br>`);
        }
    }
    return(console.log (numeros));
}

esParImpar ([4,1,10000,100000110164]);


// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 

var calificaciones = [];

var calificacion = (calificaciones) => {

    for (var i=0; i<calificaciones.length; i++){
        if (calificaciones[i] < 60) {
            console.log (`La nota de su examen es menor a 60%, por lo tanto esta desaprobado`);
        }
        else if (calificaciones[i]>=60 && calificaciones[i] <80) {
            console.log (`La nota de su examen es ${calificaciones[i]}%, por lo tanto esta Aprobado`);
        }
        else if (calificaciones[i]>80) {
            console.log (`La nota de su examen es ${calificaciones[i]}%, excelente trabajo`);
        }
    }
}

calificacion([90,40,60,70]);


// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución:


var precios = [];

var precioProducto = (precios) => {

    for (var i=0; i<precios.length; i++){
        if (precios[i] < 20) {
            console.log (`Es un producto economico.`);
        }
        else if (precios[i]>=20 && precios[i] <50) {
            console.log (`Es un producto de precio moderado.`);
        }
        else if (precios[i]>80) {
            console.log (`Este es un producto de Lujo.`);
        }
    }
}

precioProducto([90,20,40,10]);
