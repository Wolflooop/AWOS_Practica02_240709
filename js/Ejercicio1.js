// Personalizacion de salidas de Consola
const style_minimal = `
  background: #2c3e50;
  color: #f1ecf1;
  border-left: 4px solid #3498db;
  padding: 6px 12px;
  font-size: 1.1rem;
  font-family: monospace;
`;

// Opción oscura con neón
const style_neon = `
  background: #0f0f23;
  color: #0ff;
  padding: 10px 20px;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  border: 1px solid #0ff;
  border-radius: 4px;
  text-shadow: 0 0 10px #0ff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
`;


console.log("%c Ejercicio 01",style_neon);
console.log("%c Declaracion de Variables",style_minimal);


console.log(
  "%c%cTIpos de Variables",
  "color: #3498db; font-size: 1.4rem;",
  "color: #2c3e50; font-weight: bold; font-size: 1.2rem;"); 

//  1.Declaración de variables utilizando el prefijo "VAR"
var nombre = "Diego";  
var miappellido;
console.warn("-- Declaracion de variables utilizando el profijo VAR --");


//Utilizaremos  la función "console.log" para imprimir el valor de la variable en la consola del navegador.
console.log("El valor de la variable nombre es = :", nombre);
console.log("El valor de la variable apellido es = :", miappellido)
// Que la variable no se ha sido inicializada, es decir no se ha asignado un valor que almacene.;

miappellido= "Garrido Castillo";
//En este momento la variable ya tiene un valor almacenado por que al imprimirle debera de mosrtrar el dicho dato
console.log("El valor de la variable mi appellido es = :", miappellido);

//Para actualizar el valor de una variable previamente definifida solo basta con igualar al nuevo valor
nombre = "Diego";
console.log("Hola, ", nombre , miappellido);

//  2.Declaración de variables utilizando el prefijo "CONST"
console.warn("-- Declaracion de variables utilizando el profijo CONST --");

/* La palabra reservada CONST nos permite a nivel memoria reservar espacio para almacenar datos de una cosntante que 
a diferencia de una VARIABLE esta no puedecaminar su valor durante la ejecucion del programa de igual manera no se pueden
 declarar constantes sin obligatoriamenre inicializarlas, es decir asignarles unvalor especifico, por ejemplo:*/

const mimatricula = "240709";

//imprimir el valor de una consrtante
console.log("El valor actual de la constante mimatricula es = :", mimatricula);

//const miedad; //--Esto ocasiona un error por que la constante no fue inicializada 

//mimatricula = "24XXXX"; //--ocasiona un error por qye el valor de una CONSTANTE no puede canbiar una vez a sido asignado.

// 3.Declaracion de Variables utilizando el prefijo "LET"

/**
 * LET es el prefijo
 */

var miFechaNacimiento = new Date("2006-11-08");

function calcularEdad(fechaNacimiento) {
    //Para calcular la edad a partir de la fecha de hoy
    let fechaActual = new Date();

    //Dadod que los datos de fechas son almacenados en milisegundos por Default en javascript, necesitamos una variable que nos permite saber el numero de milisegundos por dia
    let milisegundosPorDia = 24 * 60 * 60 * 1000;

    //Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos calcular los milisegundos que hemos vivido
    let diasVividos = (fechaActual - fechaNacimiento) / milisegundosPorDia;

    //invocamos el metodo matetico de la funcion piso (FLOOR)
    var edad = diasVividos / 365.25;
    edad = Math.floor(edad); //Redondeamos hacia abajo

    return edad;
}

console.warn("--Declaracion de variables utilizando el prefijo LET --");
console.log("El valor de la variable miFechaNacimiento es = : ", miFechaNacimiento);
var miedad = calcularEdad(miFechaNacimiento);
console.log("Despues de ejecutar la funcion calcularEdad(), puedo saber que tienes: ", miedad,"años");

if(miedad >=18){
    var esMayordeEdad = true;
    var esMenordeEdad = false;
}
if(miedad <18){
    var esMayordeEdad = false;
    var esMenordeEdad = true;
}

console.warn("-- Interpolacion de Datos --");
console.log(`Hola, ${nombre} ${miappellido} se que tienes: ${miedad} años; por lo que eres: ${esMayordeEdad?' mayor de edad': ' menor de edad'}.`)
