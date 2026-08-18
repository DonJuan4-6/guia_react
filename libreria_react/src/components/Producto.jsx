import labial from "../assets/labial.png";

export default function Producto({ nombre, descripcion, precio, categoria, imagen }) {
  return (
    <article className="producto">
      <img src={imagen} alt={nombre} />
      <span className="categoria">{categoria}</span>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <strong>${precio}</strong>
    </article>
  );
}



/*PROPS CON DESTRUCTURING*/

/*
    export default function Producto({ nombre, descripcion, precio }) {
        return (
            <article className="producto">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <strong>${precio}</strong>
            </article>
        );
    }
*/


/* ARREGLOS: LOS DATOS VIENEN EN LISTA */
/*
const productos = [
    { id: 1, nombre: "Labial Mate", precio: 18000},
    { id: 2, nombre: "Crema Facial", precio: 26000},
    { id: 3, nombre: "Perfume", precio: 42000},
    { id: 4, nombre: "Set de Brochas", precio: 35000},
    { id: 5, nombre: "Sobra", precio: 22000}
]
*/