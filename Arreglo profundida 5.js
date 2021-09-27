var especie= prompt("ingrese el especie");


var elemtentos3 = {
        "mamifero": {
            "mapache" : true,
            "zorrillo" : true,
            "temazate" : true,

        },
        "aves" : {
            "colibri" : true,
            "aguila" : true,
            "guacamaya" : true,

        },
        "Terrestres":{
            "puma" : true,
            "elefante" : true, 
            "pantera" : true,



        },
        "oviparos" :{
            "serpiente" : true,
            "cocodrilo" : true,
            "rana" : true,

        },
        "anfibios" :{
            "ajolote" : true,
            "salamandra" : true,
            "sapo" : true,
            "camaleon " : true,

        },  
    }

switch (especie) {
    case "mamifero":
      console.log(elemtentos3["mamifero"]);
      break;
    case 'aves':
        console.log(elemtentos3["aves"]);
      break;
    case 'Terrestres':
        console.log(elemtentos3["Terrestres"]);
      break;
    case 'oviparos':
        console.log(elemtentos3["oviparos"]);
      break;
    case 'anfibios':
        console.log(elemtentos3["anfibios"]);
      break;
    

}

