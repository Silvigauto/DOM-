
// -----------Function para mostrar el menu--------------

let menuBebidas = ['Gaseosa ', 'Agua Mineral', 'Cerveza'];
let menuComidas = ['Hamburguesa ', 'Porción de papas fritas', 'Sanguche de Milanesa'];
let menuCompleto = menuBebidas.concat(menuComidas);


function prueba (unArray) {
    for (let i = 0; i < unArray.length; i++) {
        alert(unArray[i]);
    }
}

alert('¡Bienvenido te mostramos la carta!')
prueba(menuCompleto);

// ------------------Existencia de producto 'some'----------

const productos = [{ id: 1,  producto: "Hamburguesa", precio: 800 },
                  {  id: 2,  producto: "Papas", precio: 500 },
                  {  id: 3,  producto: "Sanguche de milanesa"  , precio: 700},
                  {  id: 3,  producto: "Cerveza"  , precio: 600},
                  {  id: 3,  producto: "Gaseosa linea pepsi"  , precio: 250},
                  {  id: 3,  producto: "Agua"  , precio: 350},
                  
                ]



let siExiste = prompt('Ingrese el producto que desea saber si hay. INGRESE LA PRIMERA LETRA CON MAYUSCULA')

const existe = productos.some(producto => producto.producto === siExiste);

function existeProducto() {
    if (existe == false ) {
       alert ('Ese producto no lo tenemos :(')
    }
    else if (existe == true) {
       alert ('Ese producto si lo tenemos!')
    }
   }
   
   
existeProducto();
      

// ------------ Función para tomar pedidos con clases y objetos-----------------------------


let pedido = []; 

class Menu1 {
    constructor(comida, bebida) {
        this.comida = comida;
        this.bebida = bebida;
    }
    mostrar() {       
        alert('Tu pedido es: \n Comida: ' + this.comida + '\n Bebida: ' + this.bebida);
    }
}

function creacionMenu () {
    let producto1 = prompt('Ingrese su comida');
    let producto2 = prompt('Ingrese su bebida');
    let cliente1 = new Menu1 (producto1, producto2)
    cliente1.mostrar();
    pedido.push(cliente1);
    console.log(pedido);

}




// ------------funcion maximo de personas por mesa----------------------

let cantidadPersonas = prompt('Ingrese cuantas personas son');

function limitePersonas () {
        if(cantidadPersonas > 3) {
            alert('Solo tenemos mesas para hasta 3 personas')
            cantidadPersonas = prompt('Ingrese cuantas personas son');
        } 

        
            for (let i = 0; i < cantidadPersonas; i++) {
            creacionMenu();
            } 
        
}

limitePersonas();

// ----------Filter, devuelve todos los productos que podes comprar con ese monto---------------

let unPrecio = parseInt(prompt('Ingrese cuanto dinero tiene'))
const baratos = productos.filter(producto => producto.precio <= unPrecio)
console.log(baratos)

