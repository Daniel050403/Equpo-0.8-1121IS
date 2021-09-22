var numero = prompt("ingrese el numero");
const  generateRandomString = (numero) => {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result1= '';
    

    const charactersLength = characters.length;

    for ( let i = 0; i < numero; i++ ) {
        for ( let i = 0; i < numero; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result1+='\n';
    }
    return result1;

}

const displayRandomString = () =>{

   let randomStringContainer = document.getElementById('random_string'); 

    randomStringContainer.innerHTML =  generateRandomString(numero);    

}

console.log(generateRandomString(numero));