// let ingreso = prompt("¿Cuenta con usuario? S/N");

// if (ingreso.toLowerCase() == 's') {

//     let usuarioIngresando = prompt("Ingrese nombreProducto de usuario:");
//     let pass = prompt('Ingrese contraseña:');

//     while (usuarioIngresando != 'cliente' || pass != 'cliente') {

//         alert("Usuario y/o contraseña incorrecta.");
//         usuarioIngresando = prompt("Ingrese nombreProducto de usuario:");
//         pass = prompt('Ingrese contraseña:');

//     }
//     user = "cliente";
//     alert('¡Bienvenido, ' + usuarioIngresando + '!');

// } else if (ingreso.toLowerCase() == 'n') {
//     user = "no";
//     alert('Bienvenido, cliente no registrado');
// } else {
//     user = "no";
//     alert('Error');
// }

let user = 'cliente';

class producto {
    constructor(
        idProducto,
        nombreProducto,
        precio,
        enStock,
        femenino,
        masculino,
        barba,
        cabello
    ) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.enStock = enStock;
        this.femenino = femenino;
        this.masculino = masculino;
        this.barba = barba;
        this.cabello = cabello;
    }

    descuentoCliente() {
        this.precio = this.precio - iva;
    }

    vender() {
        this.vendido = true;
    }

    listaDeProductos() {
        alert(this.nombreProducto + ". \nPrecio: $" + this.precio);
    }
}

const producto1 = new producto(
    1,
    "Cera pomada Cikonielf Styling",
    300,
    true,
    false,
    true,
    false,
    true
);
const producto2 = new producto(
    2,
    "Cera para peinar profesional Shock",
    800,
    true,
    false,
    true,
    false,
    true
);
const producto3 = new producto(
    3,
    "Cera Pelo & Barba Capilatis Hombre",
    506,
    true,
    false,
    true,
    true,
    true
);
const producto4 = new producto(
    4,
    "Cera Gel Vikingo para Barba",
    293,
    true,
    false,
    true,
    true,
    false
);
const producto5 = new producto(
    5,
    "Crema de peinar Pantene",
    290,
    true,
    true,
    true,
    false,
    true
);
const producto6 = new producto(
    6,
    "Crema Para Peinar Pantene Colágeno",
    620,
    true,
    true,
    true,
    false,
    true
);
const producto7 = new producto(
    7,
    "Gel Primicia Modelador Efecto Mojado",
    450,
    true,
    false,
    true,
    false,
    true
);
const producto8 = new producto(
    8,
    "DR. SELBY - fijador para cabello",
    130,
    true,
    false,
    true,
    false,
    true
);
const producto9 = new producto(
    9,
    "Gel Calypso Fijador Fuerte",
    78,
    true,
    false,
    true,
    false,
    true
);
const producto10 = new producto(
    10,
    "Cera En Polvo Golden Moustache Efecto Matte",
    350,
    true,
    true,
    true,
    false,
    true
);

console.log(producto1);

const inventario = [];

inventario.push(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10
);


console.table(inventario);

//lista todos los productos

let listadoProductos = "";
for (const producto of inventario) {
    listadoProductos += producto.idProducto + ") " + producto.nombreProducto + ". Precio: $" + producto.precio + "\n";
}
alert(listadoProductos);

console.table(inventario);



//selecciona el producto por su ID 




let opcionMenu = prompt("Menú: \n1) Listar productos femeninos. \n2) Listar productos masculinos. \n3) Listar de mayor precio menor precio. \n4) Listar producto de menor a mayor precio. \n5) Listar productos solo de barba. \n6) Listar productos solo de cabello. \n7)Listar todos los productos. \n8) Seleccionar precio máximo. \n9) Agregar a carrito. \n0) SALIR.");

while (opcionMenu != 0) {
    switch (opcionMenu) {
        case '1':
            function productoFemenino(feme) {
                const filtrados = inventario.filter((producto) => producto.femenino == feme);
                console.table(filtrados);
            }
            productoFemenino(true);
            break;
        case '2':
            function productoMasculino(masc) {
                const filtrados = inventario.filter((producto) => producto.masculino == masc);
                console.table(filtrados);
            }
            productoMasculino(true);
            break;
        case '3':
            console.table(inventario);
            break;
        case '4':
            console.table(inventario);
            break;
        case '5':
            function productoBarba(barba1) {
                const filtrados = inventario.filter((producto) => producto.barba == barba1);
                console.table(filtrados);
            }
            productoBarba(true);
            break;
        case '6':
            function productoSoloCabello(soloCabello) {
                const filtrados = inventario.filter((producto) => producto.cabello = soloCabello);
                console.table(filtrados);
            }
            productoSoloCabello(true);
            break;
        case '7':
            console.table(inventario);
            break;
        case '8':

            function precioMax(precioMaximo) {
                const filtrados = inventario.filter((producto) => producto.precio <= precioMaximo);
                console.table(filtrados);
            }

            let precioElegido = parseInt(prompt('Ingrese precio máximo aceptado (0 para volver):'));

            while (precioElegido != 0) {

                precioMax(precioElegido);
                precioElegido = parseInt(prompt('Ingrese precio máximo aceptado (0 para volver):'));

            }

            precioMax(precioElegido);
            break;
        case '9':
            const carro = [];

            let opcionCarro = parseInt(prompt('Ingrese ID de producto: \n' + listadoProductos));
            let totalPagar = 0;
            let precioPagar = '';


            while (opcionCarro != 0) {

                function encuentraProducto(productoID) {
                    const seleccionado = inventario.find((producto1) => producto1.idProducto == productoID);
                    console.table(seleccionado.precio);
                    precioPagar = seleccionado.precio;
                    carro.push(seleccionado);

                }
                encuentraProducto(opcionCarro);
                console.table(carro);

                totalPagar = totalPagar + precioPagar;

                opcionCarro = parseInt(prompt('Ingrese ID de producto: \n' + listadoProductos));
            }




            console.log(totalPagar);


            let productosEnCarrito = '';
            for (const producto of carro) {
                productosEnCarrito += producto.nombreProducto + '. Precio: $' + producto.precio + '\n';
            }

            alert('Su carrito: \n' + productosEnCarrito);

            let clienteRegistrado;
            let pagar;
            let iva = totalPagar * 0.20;

            if (user == 'cliente') {
                clienteRegistrado = true;
                pagar = totalPagar - iva;
            } else {
                clienteRegistrado = false;
                pagar = totalPagar;
            }

            function mensajeDePago(client, aPagar) {
                if (client == true) {
                    alert('Su carrito contiene: ' + productosEnCarrito);
                    alert('Su total es de: $' + totalPagar + '\nAplica descuento de IVA de: $' + iva + '\nSu precio final es de: $' + aPagar);
                } else {
                    alert('Su carrito contiene: ' + productosEnCarrito);
                    alert('Su total es de: $' + aPagar + '\nLos clientes registrados obtienen descuento del IVA.');
                }
            }

            mensajeDePago(clienteRegistrado, pagar);
            break;
        default:
            alert('Seleccione una opción válida');
    }
    opcionMenu = prompt("Menú: \n1) Listar productos femeninos. \n2) Listar productos masculinos. \n3) Listar de mayor precio menor precio. \n4) Listar producto de menor a mayor precio. \n5) Listar productos solo de barba. \n6) Listar productos solo de cabello. \n7)Listar todos los productos. \n8) Seleccionar precio máximo. \n0) SALIR.");

}


