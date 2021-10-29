
//ejercicio 1//

var ver = prompt("ingrese que tipo de numero quiere ver eleatorio o simple o varios eleatorios ");


switch (ver) {
    case 'eleatorio':
      console.log(nuevonumero());
      break;
    case 'simple':
      console.log(simple());
      break;



function nuevonumero(){
    var numero= Math.floor(Math.random()*100)
    return numero;
}

function simple(){
    let num= 5;
    return num;
}


}



//ejercicio 2//

function mostrarDia() {
  var fecha = new Date();
  
console.log("Hoy es dia " + fecha.getDate());
}

mostrarDia()








//ejercicio 3//
var nombre= "emanuel";
sumar(10,50);




saludar(nombre);
function saludar(nombre){
    console.log("hola----"+ nombre);
}

function sumar(a,b){
    let total = a + b;
    console.log(total);
   
}

//ejercicio 4//
var i = 0;
while (i < 1000) {
    jugador("emanuel", "torres");
  i = i + 1;
}



function jugador(nombres,apellidos){
    let jugador = {
        nombre: nombre,
        apellido: apellido,
        edad:26,
        habilidades: ["HTML","CSS","js"],
        familia:{
            padre: "padre",
            madre: "madre",
            hermanos : ["hermano1","hermano2", "hermano3"]
        }
    }

    console.log(jugador);

}


//ejercicio 5//
const n = prompt('Ingrese Cantidad de usuarios')
const data = []
const elementos = []



 function llenar(n) {
     
 
for (let i = 0; i < n; i++) {
    const nombre = prompt('Ingrese Nombre')
    const matricula = prompt('Ingrese matricula')
    const grupo = prompt('Ingrese grupo')
    const sexo = prompt('Ingrese sexo')
    const calificacion = prompt('Ingrese calificacion')
    data.push({ nombre, matricula, grupo,sexo, calificacion})
    elementos.push(sexo)

}
 }

 llenar(n)
 total()
console.log(data)