//personalizamos el separador del ejercicio03
console.log("%cEjercicio 03: Funciones",style_minimal);


//1. Funciones Procesadores, Funciones vacias (VOID) o Funciones que no retornan un valor

function saludar()
{
    console.log("Bienvenid@s, al sistema de bienes raices");
}

console.warn("1. Funciones Procedurales")
saludar();

function saludaruser(nombreUsuario, generoUsuario)
{
    if(generoUsuario="H"){
        console.log(`Bienvenido ${nombreUsuario} al sistema de bienes raices`);
    }else if (generoUsuario="M"){
        console.log(`Bienvenido ${nombreUsuario} al sistema de bienes raices`);
    }else {
        console.log(`Bienvenid@ ${nombreUsuario} al sistema de bienes raices`);
    }
}

console.warn("2. Funciones Procedurales con parametros de entrada")

console.log("nombreUsuario = Diego, generoUsuario H")
saludaruser("Diego","H");

console.log("nombreUsuario = Alma, generoUsuario M")
saludaruser("Diego","H");

console.log("nombreUsuario = Josefina Manuel, generoUsuario NULL")
saludaruser("Josefina Manuel","NULL");

//3.Funciones que retornan un dato , pero que no reciben parámetros

function fechaActual()
{
    const fecha = new Date();
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX;
};

console.warn("3. Funciones que retornan un valor, pero no tienen parametros")
let hoy = fechaActual();
console.log("Bienvenid@ al Sistema de Bienes Raices, hoy es :",hoy);
/* Imprimiendo el valor y que tipo de dato es:*/
console.log(fechaActual);
console.log(typeof(fechaActual()));
console.log(hoy)

//4. Funciones que retornan un valor y que reciben parametros de entrada

function login(username , password)
{
    let userValidation = false;

    if(username === "admin" && password === "6811"){
        userValidation=true;
        console.log("Bienvenido usuario Admin!")
    }
    else if (username === "admin" && password !="6811"){
        userValidation=false;
        console.log("Lo sentimos la contraseña es incorrecta")
    }
    else if (username !="admin" && password ==="6811"){
        userValidation=false;
        console.log("Lo sentimos el nombre de usuario no existe")
    }
    else if (username!="admin" && password!="6811"){
        userValidation=false;
        console.log("Por favor verifica el nombre de usuario y la contraseña.")
    }
    return userValidation;
}

console.warn("4. Funciones que retornan un valor y que reciben parametros de entrada")
var loginStatus;

//Test 1 - Usuario y Contraseña correctos
console.log("Test 1 - Usuario: admin , password: 6811")
loginStatus = login("admin","6811");
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente ' : 'Hubo un error en el login del usuario admin'}`);

//Test 2 - Usuario correcto y Contraseña incorrecta
console.log("Test 2 - Usuario: admin , password: 1234")
loginStatus = login("admin","1234");
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente ' : 'Hubo un error en el login del usuario admin'}`);

//Test 3 - Usuario Incorrecto y Contraseña correcta
console.log("Test 3 - Usuario: Wolf , password: 6811")
loginStatus = login("Wolf","6811");
console.log(`${loginStatus ? 'El usuario user se ha logeado satisfactoriamente ' : 'Hubo un error en el login del usuario admin'}`);

//Test 4 - Usuario y Contraseña incorrectos
console.log("Test 4 - Usuario: Woolf , password: 6811w")
loginStatus = login("Woolf","6811w");
console.log(`${loginStatus ? 'El usuario user se ha logeado satisfactoriamente ' : 'Hubo un error en el login del usuario admin'}`);


// FUNCIONES ANONIMAS, FUNCIONES FLECHA (ARROW) , FUNCIONES LAMBDA
/*A diferencia de las funciones nombradas este tipo de funciones no suelen ser
 reutilizadas en el codigo solo se ejecutan una sola vez, dando velocidad, 
 individualidad y privacidad y privacidad a los datos utilizados en el proceso
*/

//5.  Funcion anonima sin parametros
isNewUser = function(){
    const hoy = new Date();

    return (
        lastLogin.getFullYear()=== hoy.getFullYear() &&
        lastLogin.getMonth()=== hoy.getMonth() &&
        lastLogin.getDate()=== hoy.getDate()
    );
};

console.warn("5. Funciones Anonimas, sin parametros");

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es : ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

console.log("-------------------------------------------");
lastLogin = new Date(2025/12/31); //actualizamos la fecha de ultimo acceso al dia de hoy
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es : ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);