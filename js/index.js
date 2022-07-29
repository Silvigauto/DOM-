//---------Funcion para poder ver el menu al hacer click en 'Ver menu completo'--------------

 let btnMenu = document.getElementById('btnMenu');

 function handleBtnMenu ()  {
     for (const menu of menuCompleto) {
        
        let li = document.createElement('li');
        li.innerHTML = menu
        btnMenu.append(li);

}
 }

btnMenu.addEventListener('click', handleBtnMenu)

// ------------Funcion que muestra si existe o no un producto
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
    contenedor.innerHTML = `<h4 class = "text-center">Ese producto SII lo tenemos</h4>`

 }

 function generadorNoExiste () {
    let contenedor = document.getElementById('generadorExiste');   
    contenedor.innerHTML = `<h4 class = "text-center">Ese producto NOO lo tenemos</h4>`

 }



// ----------Funcion limite de personas para comer-------

let btnIncrementar  = document.getElementById('incrementar');
let btnDecrementar = document.getElementById('decrementar');
let contador = document.getElementById('contador');
let contadorValue = parseInt(contador.innerText);

function incrementarContador () {
    if(contadorValue <= 5) {
        contadorValue++;
        contador.innerText=contadorValue
     let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
     generadorCantidadPersonas.innerText = `La cantidad de personas que van a comer son ${contador.innerText}` 
    } if (contadorValue > 5) {
        contador.innerText=contadorValue
        let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
     generadorCantidadPersonas.innerText = `Solo hay mesas de hasta 6 personas` 
    }
}

function decrementarContador () {
    if(contadorValue > 1) {
      contadorValue -- ;
    contador.innerText = contadorValue; 
    let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
     generadorCantidadPersonas.innerText = `La cantidad de personas que van a comer son ${contador.innerText}` 
    }
    
}

btnIncrementar.addEventListener('click', incrementarContador);
btnDecrementar.addEventListener('click', decrementarContador);





let menuBebidas = ['Gaseosa ', 'Agua', 'Cerveza'];
let menuComidas = ['Hamburguesa ', 'Papas', 'Sanguche de milanesa'];
let menuCompleto = menuBebidas.concat(menuComidas);






// ----------Generador de pedidos que muestra una card-----------
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


