

let ingreso = prompt("¿Cuenta con usuario? S/N");

if (ingreso == "s" && "S") {

    let user1 = prompt("Ingrese nombre de usuario:");
    let pass = prompt('Ingrese contraseña:');

    while (user1 != 'cliente' || pass != 'cliente') {

        alert("Usuario y/o contraseña incorrecta.");
        user1 = prompt("Ingrese nombre de usuario:");
        pass = prompt('Ingrese contraseña:');

    }
    user="cliente";
    alert('¡Bienvenido, ' + user + '!');


} else if (ingreso == 'n' && 'N') {
    user = "no";
    alert('Bienvenido, cliente no registrado');
} else {
    user = "no";
    alert('Error');
}



let id_prod = prompt('ID de producto, 0 para resultado de carrito');
let total = 0
let carrito_nom = ''
while (id_prod != "0") {
    switch (id_prod) {
        case '1':
            nom_pro = 'Cera pomada Cikonielf Styling'
            precio = parseInt('300')
            alert(nom_pro + ' $' + precio)
            break;
        case '2':
            nom_pro = 'Cera para peinar profesional Shock'
            precio = parseInt('800')
            alert(nom_pro + ' $' + precio)
            break;
        case '3':
            nom_pro = 'Cera Pelo & Barba Capilatis Hombre';
            precio = parseInt('506')
            alert(nom_pro + ' $' + precio)
            break;
        case '4':
            nom_pro = 'Cera Gel Vikingo para Barba';
            precio = parseInt('293')
            alert(nom_pro + ' $' + precio)
            break;
        case '5':
            nom_pro = 'Crema de peinar Pantene';
            precio = parseInt('290')
            alert(nom_pro + ' $' + precio)
            break;
        case '6':
            nom_pro = 'Crema Para Peinar Pantene Colágeno';
            precio = parseInt('620')
            alert(nom_pro + ' $' + precio)
            break;
        case '7':
            nom_pro = 'Gel Primicia Modelador Efecto Mojado';
            precio = parseInt('450')
            alert(nom_pro + ' $' + precio)
            break;
        case '8':
            nom_pro = 'DR. SELBY - fijador para cabello'
            precio = parseInt('130')
            alert(nom_pro + ' $' + precio)
            break;
        case '9':
            nom_pro = 'Gel Calypso Fijador Fuerte'
            precio = parseInt('78')
            alert(nom_pro + ' $' + precio)
            break;
        case '10':
            nom_pro = 'Cera En Polvo Golden Moustache Efecto Matte'
            precio = parseInt('350')
            alert(nom_pro + ' $' + precio)
            break;
    }

    carrito_nom = carrito_nom + '\n' + nom_pro;
    total = total + precio;
    console.log('Precio sin descuento: '+total);
    id_prod = prompt('ID de producto, 0 para resultado de carrito');


}

let es_cliente;
let pago;
let iva = total * 0.20;

if (user=='cliente'){
    es_cliente=true;
    pago = total - iva;
} else {
    es_cliente=false;
    pago = total;
}

function informa_total (client, a_pagar){
    if (client==true){
        alert("Su carrito contiene: " +carrito_nom);
        alert("Usted recibió un descuento del IVA de: $" +iva+"\nSu total es de: $" +a_pagar);
    } else{
        alert("Su carrito contiene: " +carrito_nom);
        alert ('Su total es de: $' +a_pagar+ "\nLos clientes registrados reciben descuento del IVA.");
    }
}

informa_total (es_cliente, pago);



