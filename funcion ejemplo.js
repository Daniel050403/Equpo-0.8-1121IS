
	var firstname = ["Adrián", "Agustín", "Alberto","Hugo"];
	var lastname= ["Garcia", "Rey", , "Marcos", "Marti", "Soriano", "Mendoza"];
    var sexo=["hombre", "mujer"];
    var edad=["14","13","94","34","51"];

 


    var i = 0;
    while (i < 1000) {
        var rand_first = firstname[Math.floor(Math.random()*firstname.length)]
        var rand_last =  lastname[Math.floor(Math.random()*lastname.length)]
        var sexo1 =  sexo[Math.floor(Math.random()*sexo.length)]
        var edad1 =  edad[Math.floor(Math.random()*edad.length)]
        

        jugador(rand_first,rand_last, sexo1,edad1);
      i = i + 1;
    }
    

function jugador(nombre,apellido,sexo1,edad1){
    let jugador = {
        nombre: nombre,
        apellido: apellido,
        edad:edad1,
        sexo: sexo1,
        habilidades: ["HTML","CSS","js"],
        familia:{
            padre: "padre",
            madre: "madre",
            hermanos : ["hermano1","hermano2", "hermano3"]
        }
    }

    console.log(jugador);

}