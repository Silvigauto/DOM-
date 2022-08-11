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




// class Menu {
//     constructor(comida, bebida){
//         this.comida = comida,
//         this.bebida = bebida
//     }
//  }

//  let formulario = document.getElementById('form');

//  let arrayMenu = [];




//  window.addEventListener("load", () => {
//     if (localStorage.getItem('arrayMenu')) {
//         arrayMenu = JSON.parse(localStorage.getItem("arrayMenu"));
//         generadorCard(arrayMenu)
        
//     }
   
//   })






// formulario.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let info = event.target.children;
//     const menu1 = new Menu(info[0].value, info[1].value);
//     arrayMenu.push(menu1)
//     generadorCard(arrayMenu);

//     localStorage.setItem("arrayMenu", JSON.stringify(arrayMenu))
    
     
// })


// const generadorCard = (array) => {
//     let contenedor = document.getElementById('generadorPedido');
//     generadorPedido.innerHTML = '';
//     array.map( el => contenedor.innerHTML += `
//                         <div class="card mt-3" id="${el.comida}" ">
                            
//                             <div class="card-body">
//                             <h5 class="card-title">Tu pedido es:</h5>
//                             <p class="card-text">${el.comida}</p>
//                             <p class="card-text">${el.bebida}</p>
//                             <button type="button" class = "btn btn-danger btnEliminar" > Borrar </button>
                            
//                             </div>
//                         </div>
//     `)

//     eliminar();
//  }



// const eliminar = () => {
// let btnEliminar = document.querySelectorAll('.btnEliminar')

//     for (const btn of btnEliminar) {
//         btn.addEventListener('click', (event) => {
//             let nodo = event.path[2];
            
//             let buscar = arrayMenu.findIndex(el => el.comida == nodo.id)
            
//             arrayMenu.splice(buscar, 1)
            
//             nodo.remove()
//             localStorage.setItem("arrayMenu", JSON.stringify(arrayMenu))  


//             Swal.fire({
//                 title: `Has eliminado ${nodo.id}`,
                
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             })

//         })
        
//     }
// }

// --------------- Funciones para eliminar del carrito ----------------



    let btnRemove =  document.getElementsByClassName('btn-danger')
    for ( let i = 0; i < btnRemove.length; i++ ) {
        let button = btnRemove[i]
        button.addEventListener('click', removeCart)   
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for ( let i = 0; i < quantityInputs.length; i++ ) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCart = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCart.length; i++ ) {
            let button = addToCart[i]
            button.addEventListener('click', addToCartClicked)

    }







function removeCart (event) {
    let btnClicked =  event.target
    btnClicked.parentElement.parentElement.remove()
    cartTotal()
 } 

 function cartTotal () {
    let cartItem = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItem.getElementsByClassName('cart-row') 
    let total = 0
    for ( let i = 0; i < cartRows.length; i++ ) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price') [0]
        let quantityElement = cartRow.getElementsByClassName ('cart-quantity-input')[0]
        
        let price = parseFloat(priceElement.innerText .replace ('$', ''))
        let quantity = quantityElement.value
        total = total + (price*quantity)
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function quantityChanged(event) {
    let input = event.target 
    if (isNaN (input.value) || input.value <= 0) {
        input.value = 1
    }
    cartTotal()
}

function addToCartClicked (event) {
    let btnCart = event.target
    let shopItem = btnCart.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    
    let img = shopItem.getElementsByClassName('shop-item-image')[0].src
    

    addItemToCart(title, price, img)
    cartTotal()
}

function  addItemToCart (title, price, img) {
    let cartRow = document.createElement ('div')
    cartRow.classList.add('cart-row')
    
    
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length ; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Ya agregaste este producto al pedido')
            return
        }
    }
    let cartRowContent = `
                            <div class="cart-item cart-column m-2">
                                <img class="cart-item-image" src="${img}" width="100" height="100">
                                <span class="cart-item-title ">${title}</span>
                            </div>

                            <span class="cart-price cart-column">${price}</span>

                            <div class="cart-quantity cart-column ">
                                <input class="cart-quantity-input" type="number" value="1">
                                <button class="btn btn-danger" type="button">Eliminar</button>
                            </div>
                        `
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)

    cartRow.getElementsByClassName ('btn-danger') [0].addEventListener('click', removeCart)
    cartRow.getElementsByClassName ('cart-quantity-input') [0].addEventListener('change', quantityChanged)
}




























