

let inputText = document.getElementById('formPedido');

let arrayExiste = []; 



const productos = [{ id: 1,  producto: "Hamburguesa", precio: 800 },
                  {  id: 2,  producto: "Papas", precio: 500 },
                  {  id: 3,  producto: "Sanguche de milanesa"  , precio: 700},
                  {  id: 4,  producto: "Cerveza"  , precio: 600},
                  {  id: 5,  producto: "Gaseosa"  , precio: 250},
                  {  id: 6,  producto: "Agua"  , precio: 350},
                  
 ]


 inputText.addEventListener ('submit', (event) => {
    event.preventDefault();  
    let nodo = event.target.children;
    let info = nodo[0].value;
    let buscar = productos.findIndex(el => el.producto == info)

    if (buscar != -1) {
        console.log('  existeeee')
        generadorExiste ()
    } else {
        console.log('No existeeee')
        generadorNoExiste ()
    }

 })

 function generadorExiste () {
    let contenedor = document.getElementById('generadorExiste');   
    contenedor.innerHTML = `<h4>Ese producto SII lo tenemos</h4>`

 }

 function generadorNoExiste () {
    let contenedor = document.getElementById('generadorExiste');   
    contenedor.innerHTML = `<h4>Ese producto NOO lo tenemos</h4>`

 }






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



let menuBebidas = ['Gaseosa ', 'Agua', 'Cerveza'];
let menuComidas = ['Hamburguesa ', 'Papas', 'Sanguche de milanesa'];
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
                        <div class="card mt-3" id="${el.comida}" ">
                            
                            <div class="card-body">
                            <h5 class="card-title">Tu pedido es:</h5>
                            <p class="card-text">${el.comida}</p>
                            <p class="card-text">${el.bebida}</p>
                            
                            </div>
                        </div>
    `)


 }


