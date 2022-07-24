//After clase 10
let carrito= [];
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargarlos en la tabla - tarea!!!
}
let productosJSON = [];
let lista=document.getElementById("listaConsolas");
    
//llamada a renderizar
renderizarProductos();

function renderizarProductos() {
    for (const consola of Consolas) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item mt-2 pt-2">
        <h3 class="my-0 font-weight-bold"> ${consola.nombre} </h3>
        <img src=${consola.foto} class=" width="250" height="200 img-responsive " alt=""/>
        <hr>
        <p> Fabricante: ${consola.fabricante} </p>
        <p> Año: ${consola.anio} </p>
        <p> Edicion: ${consola.edicion} </p>
        <p> Memoria: ${consola.memoria} </p>
        <p><strong> $ ${consola.precio} </strong></p>
        <hr>
        <button class='btn btn-danger'id='btn${consola.id}'>Comprar</button>
        </li>`;
    }
    

    //eventos boton
    Consolas.forEach(consola=>{
        document.getElementById(`btn${consola.id}`).addEventListener('click',function(){
            agregarAlCarrito(consola);
            Toastify({
                text:"Ha agregado un" +consola.nombre,
                duration:3000,
                gravity:"top",
                position:"right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        });
    });
}


function eliminar(id){
    let indice=carrito.findIndex(prod => prod.id==id);
    carrito.splice(indice,1);//eliminando del carro
    let fila=document.getElementById(`fila${id}`);
    document.getElementById("tablabody").removeChild(fila);//eliminando de la tabla
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function agregarACarrito(productoNuevo) {
    let encontrado = carrito.find(p => p.id == productoNuevo.id);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(productoNuevo);
        carrito.push(prodACarrito);
        console.log(carrito);
        Swal.fire(
            'Nuevo producto agregado al carro',
            productoNuevo.nombre,
            'success'
        );
        //agregamos una nueva fila a la tabla de carrito
        document.getElementById("tablabody").innerHTML+=(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.nombre}</td>
            <td id='${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.precio}</td>
            <td> <button class='btn btn-light' onclick='eliminar(${prodACarrito.id})'>🗑️</button>`);
    } else {
        //pido al carro la posicion del producto 
        let posicion = carrito.findIndex(p => p.id == productoNuevo.id);
        console.log(posicion);
        carrito[posicion].cantidad += 1;
        //con querySelector falla
        document.getElementById(productoNuevo.id).innerHTML=carrito[posicion].cantidad;
    }
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));

    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function agregarAlCarrito(productoNuevo){
    carrito.push(productoNuevo);
    console.log(carrito);
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${productoNuevo.id}</td>
            <td>${productoNuevo.nombre}</td>
            <td>${productoNuevo.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function calcularTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
}