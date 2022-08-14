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





// --------------------- Carrito de compras con Local Storage ---------------
let carritoDeCompras = JSON.parse(localStorage.getItem('carrito'))||[];


class Productos  {
    constructor (img, title) {
        this.img = img,
        this. title = title
        

    }
}




let btnAgregar = document.getElementsByClassName('shop-item-button');



for (const btn of btnAgregar) {
    btn.addEventListener ('click', agregarCarrito)
}


function agregarCarrito (event) {
    

    let btnCart = event.target    
    let shopItem = btnCart.parentElement.parentElement
      
    let img = shopItem.getElementsByClassName('shop-item-image')[0].src
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    
 
    let carrito1 = new Productos (img, title)
    carritoDeCompras.push(carrito1)
      
    generadorCarrito(carritoDeCompras);
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    
}


function generadorCarrito (array) {
    let contenedor = document.getElementById('cart-items')
    contenedor.innerHTML = ''; 
    array.map ( el => contenedor.innerHTML +=   `<div class="cart-row">
                                                    <div class="cart-item cart-column">
                                                        <img class="cart-item-image" src="${el.img}" width="100" height="100">
                                                        <span class="cart-item-title">${el.title}</span>
                                                    </div>
                                                    
                                                    <div class="cart-quantity cart-column">
                                                        
                                                        <button class="btn btn-danger" type="button">Eliminar</button>
                                                    </div>
                                                </div>
    `)
   eliminar ();

}


const eliminar = () => {
let btnEliminar = document.querySelectorAll('.btn-danger')

    for (const btn of btnEliminar) {
        btn.addEventListener('click', (event) => {
            let nodo = event.path[2];
            
            let buscar = carritoDeCompras.findIndex(el => el.title == nodo.id)
            
            carritoDeCompras.splice(buscar, 1)
            
            nodo.remove()
              
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))

        })
        
        
    }
}

generadorCarrito(carritoDeCompras);



















