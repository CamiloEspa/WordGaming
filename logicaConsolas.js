//After clase 10
let carrito=[];
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargarlos en la tabla - tarea!!!
}
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
