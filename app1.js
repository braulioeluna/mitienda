
let productos = [
    { id: 1, nombre: "Camisa", precio: 300 },
    { id: 2, nombre: "Pantalón", precio: 500 },
    { id: 3, nombre: "Zapatos", precio: 800 },
    { id: 4, nombre: "Sombrero", precio: 200 }
];


let carrito = [];


function mostrarMenu() {
    let menu = "Productos disponibles:\n";
    productos.forEach(producto => {
        menu += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    menu += "5. Ver carrito y total\n";
    menu += "6. Salir\n";  
    menu += "Escribe el número del producto que deseas agregar al carrito o la opción que necesite:";
    return menu;
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        return "No hay productos en el carrito.";
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        carrito.forEach(producto => {
            mensaje += `${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });
        mensaje += `\nTotal: $${total}`;
        return mensaje;
    }
}


function agregarProducto() {
    let opcion;
    do {
        opcion = prompt(mostrarMenu());
        
        if (opcion === '5') {
            alert(mostrarCarrito());
        } else if (opcion === '6') {  
            break; 
        } else {
            let producto = productos.find(p => p.id === parseInt(opcion));
            if (producto) {
                carrito.push(producto);
                alert(`${producto.nombre} agregado al carrito.`);
            } else {
                alert("No existe esa opción, intenta de nuevo.");
            }
        }
    } while (opcion !== '6');
}


function iniciarTienda() {
    agregarProducto();
}


iniciarTienda();
