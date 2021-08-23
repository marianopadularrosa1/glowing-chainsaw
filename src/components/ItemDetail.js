// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta

import { useState } from "react";
import ItemCount from "./ItemCount";
import "../App.css";
export default function ItemDetail(props) {
  const [cantidad, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
    // voy a motrar un boton que diga, terminar  mi compra
    // y me va a redigir a una nueva pagina /cart  que por ahora esta vacio
  };

  return (
    <div>
      <div className="row d-flex justify-content-around">
        <div className="card mb-3 col 3">
          <div className="card-body " >
            <h1>Producto: {props.name}</h1>
            <h3>Precio: $ {props.price}</h3>
            <h3>Stock: {props.stock}</h3>
            <img
              src={`${props.img}`}
              className="card-img-top"
              alt="..."
              style={{ height: 200, width: 200 }}
            />
            {/** crear el itemCount */}
            <ItemCount onAdd={onAdd} initial="0" stock={props.stock} />
            {/*<ItemCount initial="2" stock="8"/>*/}
            <button>finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
}
