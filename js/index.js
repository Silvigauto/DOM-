//---------Funcion para poder ver el menu al hacer click en 'Ver menu completo'--------------
let menuBebidas = ['Gaseosa ', 'Agua', 'Cerveza'];
let menuComidas = ['Hamburguesa ', 'Papas', 'Sanguche de milanesa'];
let menuCompleto = menuBebidas.concat(menuComidas);

 let btnMenu = document.getElementById('btnMenu');

 function handleBtnMenu ()  {
    let contenedorMenu = document.getElementById('contenedorMenu');
    contenedorMenu.innerHTML = '';
     for (const menu of menuCompleto) {
        
        let li = document.createElement('li');
        li.innerHTML = menu
        contenedorMenu.append(li);

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
    let info = nodo[0].value.toUpperCase();
    let buscar = productos.findIndex(el => el.producto.toUpperCase() == info)

  buscar != -1 ? generadorExiste() : generadorNoExiste();
 })

 function generadorExiste () {
    let contenedor = document.getElementById('generadorExiste');   
    contenedor.innerHTML = `<h4 class = "text-center">Ese producto SI lo tenemos</h4>`

 }

 function generadorNoExiste () {
    let contenedor = document.getElementById('generadorExiste');   
    contenedor.innerHTML = `<h4 class = "text-center">No contamos con ese producto</h4>`

 }



// ----------Funcion limite de personas para comer-------

let btnIncrementar  = document.getElementById('incrementar');

let btnDecrementar = document.getElementById('decrementar');


let contador = document.getElementById('contador');

let contadorValue = parseInt(contador.innerText);




function handleContador (e) {
    let btn = e.target;
    let operacion = btn.innerText;
    if (operacion == '+' && contadorValue <= 5) {
        contadorValue++;
        contador.innerText=contadorValue
        let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
        generadorCantidadPersonas.innerText = `La cantidad de personas que van a comer son ${contador.innerText}`
 
 
    } if (operacion == '-' && contadorValue > 1 ) {
        contadorValue -- ;
         contador.innerText = contadorValue; 
         let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
      generadorCantidadPersonas.innerText = `La cantidad de personas que van a comer son ${contador.innerText}`
 
    } else if (contadorValue > 5) {
        contador.innerText=contadorValue
        let generadorCantidadPersonas = document.getElementById('generadorCantidadPersonas');
      generadorCantidadPersonas.innerText = `Solo hay mesas de hasta 6 personas` 
    }

    
    
}

btnIncrementar.addEventListener('click', handleContador);
btnDecrementar.addEventListener('click', handleContador);





// ----------Generador de pedidos que muestra una card-----------




class Menu {
    constructor(comida, bebida){
        this.comida = comida,
        this.bebida = bebida
    }
 }

 let formulario = document.getElementById('form');

 let arrayMenu = [];




 window.addEventListener("load", () => {
    if (localStorage.getItem('arrayMenu')) {
        arrayMenu = JSON.parse(localStorage.getItem("arrayMenu"));
        generadorCard(arrayMenu)
        
    }
   
  })






formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let info = event.target.children;
    const menu1 = new Menu(info[0].value, info[1].value);
    arrayMenu.push(menu1)
    generadorCard(arrayMenu);

    localStorage.setItem("arrayMenu", JSON.stringify(arrayMenu))

    Toastify({
        text: "Has agregado un pedido!",
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'rgb(218, 103, 27, 0.7)'
        }

    }).showToast();
    
     
})


const generadorCard = (array) => {
    let contenedor = document.getElementById('generadorPedido');
    generadorPedido.innerHTML = '';
    array.map( el => contenedor.innerHTML += `
                        <div class="card mt-3" id="${el.comida}" ">
                            
                            <div class="card-body">
                            <h5 class="card-title">Tu pedido es:</h5>
                            <p class="card-text">${el.comida}</p>
                            <p class="card-text">${el.bebida}</p>
                            <button type="button" class = "btn btn-danger btnEliminar" > Borrar </button>
                            
                            </div>
                        </div>
    `)

    eliminar();
 }



const eliminar = () => {
let btnEliminar = document.querySelectorAll('.btnEliminar')

    for (const btn of btnEliminar) {
        btn.addEventListener('click', (event) => {
            let nodo = event.path[2];
            
            let buscar = arrayMenu.findIndex(el => el.comida == nodo.id)
            
            arrayMenu.splice(buscar, 1)
            
            nodo.remove()
            localStorage.setItem("arrayMenu", JSON.stringify(arrayMenu))  


            Swal.fire({
                title: `Has eliminado ${nodo.id} `,
                
                icon: 'error',
                confirmButtonText: 'OK'
            })

        })
        
    }
}






















