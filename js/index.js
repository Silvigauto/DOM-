


// // ------------------Existencia de producto 'some'----------

// const productos = [{ id: 1,  producto: "Hamburguesa", precio: 800 },
//                   {  id: 2,  producto: "Papas", precio: 500 },
//                   {  id: 3,  producto: "Sanguche de milanesa"  , precio: 700},
//                   {  id: 3,  producto: "Cerveza"  , precio: 600},
//                   {  id: 3,  producto: "Gaseosa linea pepsi"  , precio: 250},
//                   {  id: 3,  producto: "Agua"  , precio: 350},
                  
//                 ]



// let siExiste = prompt('Ingrese el producto que desea saber si hay. INGRESE LA PRIMERA LETRA CON MAYUSCULA')

// const existe = productos.some(producto => producto.producto === siExiste);

// function existeProducto() {
//     if (existe == false ) {
//        alert ('Ese producto no lo tenemos :(')
//     }
//     else if (existe == true) {
//        alert ('Ese producto si lo tenemos!')
//     }
//    }
   
   
// existeProducto();
      

// // ------------ Función para tomar pedidos con clases y objetos-----------------------------


// let pedido = []; 

// class Menu1 {
//     constructor(comida, bebida) {
//         this.comida = comida;
//         this.bebida = bebida;
//     }
//     mostrar() {       
//         alert('Tu pedido es: \n Comida: ' + this.comida + '\n Bebida: ' + this.bebida);
//     }
// }

// function creacionMenu () {
//     let producto1 = prompt('Ingrese su comida');
//     let producto2 = prompt('Ingrese su bebida');
//     let cliente1 = new Menu1 (producto1, producto2)
//     cliente1.mostrar();
//     pedido.push(cliente1);
//     console.log(pedido);

// }




// // ------------funcion maximo de personas por mesa----------------------

// let cantidadPersonas = prompt('Ingrese cuantas personas son');

// function limitePersonas () {
//         if(cantidadPersonas > 3) {
//             alert('Solo tenemos mesas para hasta 3 personas')
//             cantidadPersonas = prompt('Ingrese cuantas personas son');
//         } 

        
//             for (let i = 0; i < cantidadPersonas; i++) {
//             creacionMenu();
//             } 
        
// }

// limitePersonas();

// // ----------Filter, devuelve todos los productos que podes comprar con ese monto---------------

// let unPrecio = parseInt(prompt('Ingrese cuanto dinero tiene'))
// const baratos = productos.filter(producto => producto.precio <= unPrecio)
// console.log(baratos)



let menuBebidas = ['Gaseosa ', 'Agua Mineral', 'Cerveza'];
let menuComidas = ['Hamburguesa ', 'Porción de papas fritas', 'Sanguche de Milanesa'];
let menuCompleto = menuBebidas.concat(menuComidas);




 let btnMenu = document.getElementById('btnMenu');




 function handleBtnMenu ()  {
     for (const menu of menuCompleto) {
        let li = document.createElement('li');
        li.innerHTML = menu
        btnMenu.append(li);

}
 }

btnMenu.addEventListener('click', handleBtnMenu)


class Menu {
    constructor(comida, bebida){
        this.comida = comida,
        this.bebida = bebida
    }

 }


 let formulario = document.getElementById('form');

 let arrayMenu = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let info = event.target.children;
    const menu1 = new Menu(info[0].value, info[1].value);
    arrayMenu.push(menu1)
    console.log(arrayMenu)
     generadorCard();
})



const generadorCard = () => {
    let contenedor = document.getElementById('generadorPedido');
    generadorPedido.innerHTML = '';
    arrayMenu.map( el => contenedor.innerHTML += `
                        <div class="card" id="${el.comida}" ">
                            
                            <div class="card-body">
                            <h5 class="card-title">Tu pedido es:</h5>
                            <p class="card-text">${el.comida}</p>
                            <p class="card-text">${el.bebida}</p>
                            
                            </div>
                        </div>
    `)


 }


