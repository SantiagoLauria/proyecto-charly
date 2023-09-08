// Declaración de variables globales
let cantidad,
  carritoConcat = "Productos en el carrito:\n\n",
  mostrarCarrito,
  entrada,
  id,
  total = 0;
let trueFalse = true;

// Lista de productos
const productos = [
  { id: 1, nombre: "Remera Vida", precio: 4500 },
  { id: 2, nombre: "Remera Grasa de las Capitales", precio: 4200 },
  { id: 3, nombre: "Remera Películas", precio: 4300 },
  { id: 4, nombre: "Taza Clics Modernos", precio: 2200 },
  { id: 5, nombre: "Charly Saltando", precio: 4000 },
  { id: 6, nombre: "Cuaderno Charly", precio: 3800 },
  { id: 7, nombre: "Taza Piano Bar", precio: 1000 },
];

// Declaración del array del carrito
const carritoArr = [];

// Clase constructora para pasar el nombre y el precio de la lista de productos al carrito junto con la cantidad
class Carrito {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

//  Funcion para pasar al carrito

function agregarACarrito(nombre) {
  let productoNuevo = productos[nombre - 1];
  let producto = new Carrito(productoNuevo.nombre, productoNuevo.precio);
  carritoArr.push(producto);
}

function verCarrito() {
  for (let index = 0; index < carritoArr.length; index++) {
    carritoConcat += `${carritoArr[index].nombre} $${carritoArr[index].precio}\n`;
  }
  mostrarCarrito = carritoConcat;
  carritoConcat = "Productos en el carrito:\n\n"; // Para resetear la concatenacion del carrito y que no se repitan productos
  alert(mostrarCarrito);
}

// Ciclo para agregar productos

// while (trueFalse) {
//   console.log(productos);
//   entrada = Number(
//     prompt(
//       `Ingrese una opción para agregar:\n1) ${productos[0].nombre} \n2) ${productos[1].nombre} \n3) ${productos[2].nombre}\n4) ${productos[3].nombre} \n5) ${productos[4].nombre} \n6) ${productos[5].nombre}\n7) ${productos[6].nombre}\n\nO ingrese 0 para salir`
//     )
//   );
//   if (entrada == 0) {
//     trueFalse = false;
//     break;
//   } else {
//     cantidad = Number(prompt("Ingrese la cantidad que desee comprar:"));
//     if (cantidad > 0) {
//       agregarACarrito(entrada, cantidad);
//       console.log(carritoArr);
//       verCarrito();
//     } else {
//       alert("La cantidad a comprar debe ser mayor a 0. Inténtelo nuevamente.");
//     }
//   }
// }

// Eventos
let botonAgregar1 = document.querySelector("#agregarProducto1");
botonAgregar1.addEventListener("click", () => {
  id = 1;
  agregarACarrito(id);
  verCarrito();
});

let botonAgregar2 = document.querySelector("#agregarProducto2");
botonAgregar2.addEventListener("click", () => {
  id = 2;
  agregarACarrito(id);
  verCarrito();
});

let botonAgregar3 = document.querySelector("#agregarProducto3");
botonAgregar3.addEventListener("click", () => {
  id = 3;
  agregarACarrito(id);
  verCarrito();
});

let botonAgregar4 = document.querySelector("#agregarProducto4");
botonAgregar4.addEventListener("click", () => {
  id = 4;
  agregarACarrito(id);
  verCarrito();
});

let botonAgregar5 = document.querySelector("#agregarProducto5");
botonAgregar5.addEventListener("click", () => {
  id = 5;
  agregarACarrito(id);
  verCarrito();
});
