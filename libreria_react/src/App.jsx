import Producto from "./components/Producto";
import labial from "./assets/labial.png";
import crema from "./assets/crema.png";
import perfume from "./assets/perfume.png";
import brochas from "./assets/brochas.png";
import sombra from "./assets/sombra.png";
import "./App.css";

const productos = [
  { id: 1, nombre: "Labial mate", descripcion: "Color rojo de larga duración", precio: 18000, categoria: "Maquillaje", imagen: labial },
  { id: 2, nombre: "Crema facial", descripcion: "Hidratación profunda", precio: 26000, categoria: "Skincare", imagen: crema },
  { id: 3, nombre: "Perfume", descripcion: "Fragancia floral", precio: 42000, categoria: "Fragancias", imagen: perfume },
  { id: 4, nombre: "Set de brochas", descripcion: "6 piezas profesionales", precio: 35000, categoria: "Accesorios", imagen: brochas },
  { id: 5, nombre: "Sombra", descripcion: "Paleta 12 tonos", precio: 22000, categoria: "Maquillaje", imagen: sombra }
];

function App() {
  return (
    <main className="app">
      <h1>Wonder Beauty Shop</h1>
      <section className="catalogo">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            categoria={producto.categoria}
            imagen={producto.imagen}
          />
        ))}
      </section>
    </main>
  );
}

export default App;