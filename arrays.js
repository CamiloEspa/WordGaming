/* 
let nombreUsuario = (prompt("Ingrese su nombre su usuario"))
console.log ("Bienvenido a WordGaming, "+nombreUsuario )  */


/* function Consola (fabricante, nombre, anio, edicion, color, capacidad, memoria){

    this.fabricante=fabricante
    this.nombre=nombre
    this.anio=anio
    this.edicion=edicion
    this.color=color
    this.capacidad=capacidad
    this.memoria=memoria

}

const XboxOne= new Consola("Microsoft", "xBox One", "2021", "Standart", "Negro", "512Gb", "10 Ram")
console.log (xBox);

const PlayStation5= new Consola ("Sony", "Play Station 5", "2020", "Standart", "Negro", "812") */

//Array Consolas

/* {
    id:"",
    fabricante: "",
    nombre: "",
    anio: "",
    edicion: "",
    color: "",
    capacidad: "",
    memoria: "",
    precio: "",
}, */

const Consolas = [
     //Consolas de Microsoft
    {
    id:"",
    fabricante: "Microsoft",
    nombre: "xBox One",
    anio: "2021",
    edicion: "Standart",
    color: "Negro",
    capacidad: "512 Gb",
    memoria: "10 Gb RAM",
    precio: "1800000 COP",
},
{ 
    id:"",
    fabricante: "Microsoft",
    nombre: "xBox 360",
    anio: "2005",
    edicion: "Ultra Slim",
    color: "Negro",
    capacidad: "1000 Gb (1 TB)",
    memoria: "512 Mb RAM",
    precio: "1100000",
},
{
    id:"",
    fabricante: "Microsoft",
    nombre: "Xbox",
    anio: "2001",
    edicion: "Standart",
    color: "Negro",
    capacidad: "10 Gb",
    memoria: "64 Mb RAM",
    precio: "",
},
//Consola de Sony
{   
    id:"",
    fabricante: "Sony",
    nombre: "Play Station 4",
    anio: "2016",
    edicion: "Slim",
    color: "Negro",
    capacidad: "1000 GB (1 TB)",
    memoria: "8 Gb RAM",
    precio: "2300000",
},
{   
    id:"",
    fabricante: "Sony",
    nombre: "Play Station 5",
    anio: "2020",
    edicion: "Standart",
    color: "Negro",
    capacidad: "812 Gb",
    memoria: "16 Gb",
    precio: "3200000 COP",
},
{   
    id:"",
    fabricante: "Nintendo",
    nombre: "Nintendo Switch",
    anio: "2021",
    edicion: "Standart",
    color: "Negro",
    capacidad: "64 Gb",
    memoria: "4Gb",
    precio: "1800000 COP",
},
{   
    id:"",
    fabricante: "Nintendo",
    nombre: "Nintendo Wii",
    anio: "2006",
    edicion: "Standart",
    color: "Blanco",
    capacidad: "512 Mb",
    memoria: "24 Mb",
    precio: "800000",
}
]

/* for (const Consola of Consolas){
    console.log ("Consola " +Consola.nombre +" Año "+ Consola.anio);

} */

//Find
let encontrar=Consolas.find ((Consola)=>Consola.nombre==="xBox One")
console.log (encontrar);
if (encontrar == undefined){
    console.log ("La consola no existe")
}

// Filtro precios

/* const consolasEconomicas = Consolas.filter((consola)=> consola.precio <=1500000)
console.log (consolasEconomicas)

const consolasRecientes = Consolas.filter ((consolas)=>consolas.anio >=2020)
console.log (consolasRecientes) */

// Map

const listaConsolas = Consolas.map(consola => consola.nombre)
console.log("Estas son nuestras consolas: "+listaConsolas);



//DOM
//Tabla

let  tabla=document.createElement ("table");
tabla.className="table table-dark table-striped";
let tablaCuerpo=document.createElement ("tbody")

for ( const productosConsolas of Consolas){
    let fila=document.createElement ("tr");
    fila.innerHTML= `
                    <td>${Consolas.id}</td>
                    <td>${Consolas.fabricante}</td>
                    <td>${Consolas.nombre}</td>
                    <td>${Consolas.precio}</td>`;
    tablaCuerpo.append(fila);
}

tabla.append(tablaCuerpo)
let contenedorTabla=document.getElementById("tablaProductos")
contenedorTabla.append(tabla);


//Eventos

const form= document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    console.log (event);
}

form.addEventListener("submit", enviarFormulario);

