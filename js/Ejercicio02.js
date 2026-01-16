// Tipos de datos en Java Script

console.log("%cEjercicio 02: Tipos de Datos ",style_minimal);

// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.-  UNDEFINED (No Definido)")
let usuarioLogeado; 
var rolUsuario;
const ultimoAcceso = undefined; 

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En java script existe el método typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.*/


console.log("Tipos de dato de las varibles declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado MarcoRamirez99 se ha logeado exitosamente, el valor de la variable debera actualizarce a su username

usuarioLogeado = "Wolflooop";

// pero no solo cambiará su valor , también cambiará su tipo

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado}  y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);


// 2. BOOLEAN  (TRUE/FALSE) - Verdadero o Falso
console.warn("2.-  BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu específico para los usuarios registrados , en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognita a visualar las propiedades. */


function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} , que es de tipo: ${typeof(hayUsuarioLogeado)}`);

    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("Dado que no hay usuario logeado la app no mostrara el menú de usuario.");
    }    
    else {
        console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
    }
}

// test1  : usuario logeado = true
hayUsuarioLogeado= true; 
console.log("Test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false 
console.log("Test 2")
hayUsuarioLogeado= false; 
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado= 52.5; 
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS =-97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${userID_Owner} 
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS) : ${longGPS}
                    Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${typeof(userID_Owner)} 
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS) : ${typeof(longGPS)}
                    Altitud (GPS) : ${typeof(altGPS)}`);


//4.- STRING (Cadena de Caractéres)

var fullnameOwner = "Diego Garrido Castillo";
let nameProperty = "Hermosa Casa en la Playa de Puerto Vallarta";
let descriptionProperty = "CASA DE 2 PISOS, 4 HABITACIONES, 2 BAÑOS COMPLETOS Y ESTACIONAMIENTO PARA 2 AUTOMOVILES A ORILLA DEL MAR.";
var statusProperty = "Disponible";
const typeProperty="C";
var addressProperty;

/* Los tipos de datos STRING son un palabras , valores cualitativos de las entidades de nuestra aplicación,  que no tienen un tamaño máximo  y que estan conformadas por carácteres alfabéticos , caracteres especiales como acentos o símbolos de algun idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES , PALABRAS");

console.log(`El usuario: ${fullnameOwner},
     esta vendiendo o rentando: ${nameProperty}
     que consiste en: ${descriptionProperty}
     actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);
console.log(`Las variables declaradas son del tipo:
                fullnameOwner :  ${typeof(fullnameOwner)}
                nameProperty :  ${typeof(nameProperty)}
                descriptionProperty:  ${typeof(descriptionProperty)}
                statusProperty :  ${typeof(statusProperty)}
                typeProperty :  ${typeof(typeProperty)}`);

/* Existen métodos para manipular los datos del tipo STRING, como*/
/*El metodo toUpperCase que convierte todas la letras en mayúsculas*/
console.log("El usuarario logeado es: " + fullnameOwner.toUpperCase());
/*Por lo contrario en método toLowerCase convierte todo el texto a minusculas*/
console.log(`Descripción de la propiedad en venta: ${descriptionProperty.toLowerCase()}`);
/*Tambien existe la propiedad que cuenta el número caracteres que forman el texto, llamado length (tamaño) */
console.log(`La longitud del nombre de la propiedad es de: ${nameProperty.length}`);

/*Tenemos un metodo que nos permite hacer subCadenas o extraer la porcion de la palabra en base a su posicionamiento */
let lastname = fullnameOwner.slice(0,fullnameOwner.length)
console.log(`El apellido del propietario es: ${lastname}`);

/*Otra funcion util es aquella que nos permite reemplazar letras e palabras dentro del texto denominado replace() */

console.log(`Reemplazo de la palabra MAR por RIO, Descripcion de la propiedad: ${descriptionProperty.replace("MAR","RIO")}`);

/*O el remplazo de todas las ocuerrencias de una letra o palabra*/

console.log(`RRemplazo de las letras A por el numero 8, Nombre de la propiedad: ${nameProperty.replaceAll("a","8")}`);

/* 5 RIGINT (Entero de Alta Precusion, o alta amplitud)*/

let numeroGrande1 = 1234567890; //10 digitos
let numeroGrande2 = 12345678901234567890n; //20 digitos
let numeroGrande3 = 123456789012345678901234567890; //30 digitos
let numeroGrande4 = 1234567890123456789012345678901234567890; //40 digitos

/*Imprimimos los valores de las varibale y observamos que pasa*/
console.log(`Los valores y tipos de datos son:
numeroGrande1 = ${numeroGrande1} , tipo de dato: ${typeof(numeroGrande1)}
numeroGrande2 = ${numeroGrande2} , tipo de dato: ${typeof(numeroGrande2)}
numeroGrande3 = ${numeroGrande3} , tipo de dato: ${typeof(numeroGrande3)}
numeroGrande4 = ${numeroGrande4} , tipo de dato: ${typeof(numeroGrande4)}`
);

/*Para no perder precisión en estos numeros en JAVASCRIPT se utiliza el tipo de datos especial denominado BIGINT,
para poder almacenar el valor en este tipo de dato solo hasta con invocar el metodo de conversion en la inicializacion*/

numeroGrande1 = BigInt(1234567890); //10 digitos
numeroGrande2 = BigInt(1234567891234567890); //20 digitos
numeroGrande3 = BigInt(123456789012345678901234567890); //30 digitos
numeroGrande4 = BigInt(1234567890123456789012345678901234567890); //40 digitos

console.log(`Los valores y tipos de datos son:
numeroGrande1 = ${numeroGrande1} , tipo de dato: ${typeof(numeroGrande1)}
numeroGrande2 = ${numeroGrande2} , tipo de dato: ${typeof(numeroGrande2)}
numeroGrande3 = ${numeroGrande3} , tipo de dato: ${typeof(numeroGrande3)}
numeroGrande4 = ${numeroGrande4} , tipo de dato: ${typeof(numeroGrande4)}`
);

/*5. SYMBOL*/
/*Es tipo de dato a parte de almacenar el valor, almacenado la direccion fisica en memoria donde se alamcena el valor integrado que todos
los valores de cada variable siempre sean UNICOS*/

console.warn("6.- SYMBOL (Simbolos)");

const numero1 = 3;
const numero2 = 3.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(3);
const numero6 = Symbol(3.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");
const numero9 = Symbol(3);



console.log(`imprimiendo los valores y tipos de datos:
numero1, valor: ${numero1} , tipoDato: ${typeof(numero1)}
numero2, valor: ${numero2} , tipoDato: ${typeof(numoer2)}
numero3, valor: ${numero3} , tipoDato: ${typeof(numero3)}
numero4, valor: ${numero4} , tipoDato: ${typeof(numero4)}
numero5, valor: ${numero5.toString()} , tipoDato: ${typeof(numero5)}
numero6, valor: ${numero6.toString()} , tipoDato: ${typeof(numero6)}
numero7, valor: ${numero7.toString()} , tipoDato: ${typeof(numero7)}
numero8, valor: ${numero8.toString()} , tipoDato: ${typeof(numero8)}`
);

if(numero1 == numero2){
    console.log("Se comparo el valor de numero1 y numero2 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero1 y numero2 evaluando que son diferente en valor")
}

if(numero1 == numero3){
    console.log("Se comparo el valor de numero1 y numero3 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero1 y numero3 evaluando que son diferente en valor")
}

if(numero1 === numero3){
    console.log("Se comparo el valor de numero1 y numero3 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero1 y numero3 evaluando que son iguales en valor pero diferente tipo de dato")
}

if(numero1 == numero4){
    console.log("Se comparo el valor de numero1 y numero4 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato")
}

if(numero1 == numero5){
    console.log("Se comparo el valor de numero1 y numero5 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero1 y numero5 evaluando que son iguales en valor pero diferente tipo de dato")
}

if(numero5 == numero9){
    console.log("Se comparo el valor de numero5 y numero9 evaluando que son iguales en valor");
}else{
    console.log("Se comparo el valor numero5 y numero9 evaluando que son iguales en valor pero diferente tipo de dato")
}

/* 2. NULL (NULO) */

/*Este tipo de datos es similar a UNDERFINED, con la diferencia de que los usuarios o si sistema es conciente que se le asigno este valor*/
console.warn("7.- NULL (Indefinido)");

let isPremioUser;
let isUserLoged;
var todayDate = new Date();
var lastLogin = todayDate;
let isNewUser = null;

console.log(`Las variable del usuario son:
    isPremioUser, valor: ${isPremioUser}, tipo: ${typeof{isPremioUser}}
    isUserLoged, valor: ${isUserLoged}, tipo: ${typeof{isUserLoged}}
    isNewUser,  valor: ${isPremioUser}, tipo: ${typeof{isPremioUser}}
    `);

    /*Durante la navegacion del usuario en la plataforma en algun punto ingresa sus credenciales y se valida en base de datos*/

    /*Simulando que las credenciales fueron correctas*/

    isUserLoged = true;
    isPremioUser = null;
    if(lastLogin == todayDate)
        isNewUser = true;
    else{
        isNewUser = false;
    }

    console.log(`Las variable del usuario son:
    isPremioUser, valor: ${isPremioUser}, tipo: ${typeof{isPremioUser}}
    isUserLoged, valor: ${isUserLoged}, tipo: ${typeof{isUserLoged}}
    isNewUser,  valor: ${isNewUser}, tipo: ${typeof{isNewUser}}
    `);

