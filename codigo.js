let autoNuevo;
let autos = [];
let autoMostrar = document.getElementById("autoMostrar");
let nombre = prompt("¿Cual es su nombre?");
autoMostrar.innerHTML = `<font color ="00b3fa"><b>Autos de <br> ${nombre}</b></font>`;

/*Uso una función para no tener que repetir muchas veces el mismo 
bloque de código */

const mostarArray = () => {

    /*Verificamos si el array esta vacio;
    si lo esta, mostramos mensaje en consola...*/

    if (autos.length == 0) {
        autoMostrar.innerHTML = `<font color ="00b3fa"><b>Autos de <br> ${nombre}</b></font>`;
        console.warn("Array Vacio.");
    } else {
        /*Sino lo mostramos en pantalla

        Nota: Uso el siguiente innerHTML para 
        que los nombres no se repitan con cada inserción.

        */
        autoMostrar.innerHTML = `<font color ="00b3fa"><b>Autos de <br> ${nombre}</b></font>`;
        for (let i = 0; i < autos.length; i++) {
                autoMostrar.innerHTML += `<br><font color ="ff7b00">${autos[i]}</font>`;
        }
    }
}

document.getElementById("autoAgregar").addEventListener("click", () => {

    autoNuevo = document.getElementById("autoIn").value;

    //Para limpiar el input con cada inserción...

    document.getElementById("autoIn").value = "";
    autos.push(autoNuevo);
    mostarArray();

});

document.getElementById("autoBorrarUltimo").addEventListener("click", () => {

    if (autos.length != 0) {
        autos.pop();
        mostarArray();
    } else {
        mostarArray();
    }
});

document.getElementById("autoBorrarPrimero").addEventListener("click", () => {

    if (autos.length != 0) {
        autos.shift();
        mostarArray();
    } else {
        mostarArray();
    }
});

