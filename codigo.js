


let user = prompt("Ingrese nombre de usuario:");
let pass = prompt('Ingrese contraseña:');

while (user != 'admin' || pass != 'admin') {

    alert("Usuario y/o contraseña incorrecta.");
    user = prompt("Ingrese nombre de usuario:");
    pass = prompt('Ingrese contraseña:');

}

alert('¡Bienvenido, ' + user + '!');

function descuento(){
    precio
}

let id_prod = prompt('ID de producto, 0 para resultado de carrito');
let carrito = ''

while (id_prod != "0") {
    switch (id_prod) {
        case '1':
            alert('Cera pomada Cikonielf Styling');
            p1= parseInt('300')
            break;
        case '2':
            alert('Cera para peinar profesional Shock');
            p2= parseInt ('800')
            break;
        case '3':
            alert('Cera Pelo & Barba Capilatis Hombre');
            break;
        case '4':
            alert('Cera Gel Vikingo para Barba');
            break;
        case '5':
            alert('Crema de peinar Pantene');
            break;
        case '6':
            alert('Crema Para Peinar Pantene Colágeno');
            break;
        case '7':
            alert('Gel Primicia Modelador Efecto Mojado');
            break;
        case '8':
            alert('DR. SELBY - fijador para cabello')
            break;
        case '9':
            alert('Gel Calypso Fijador Fuerte')
            break;
        case '10':
            alert('Cera En Polvo Golden Moustache Efecto Matte')
            break;
    }

    carrito = carrito + id_prod +', ';
    console.log('Productos en carrito:' +carrito);
    id_prod = prompt('ID de producto, 0 para resultado de carrito');


}


/*for(let i=1; i<=3; i++){
user=prompt("Ingresa tu nombre de usuario:");
pass=prompt("Ingresa contraseña:");
if ((user=="admin") && (pass=="admin")){
    alert ("Usuario correcto");
    break;
} else {
    alert('Usuario y/o contraseña incorrecta. '+(3-i)+' intentos restantes.');
}
}*/

