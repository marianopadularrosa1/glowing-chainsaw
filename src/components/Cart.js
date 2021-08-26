import { useState } from "react";
export default function Cart(props) {
  const [cantidad, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
  };

  return (
    <div>
      <div className="card" >
        <div className="card-body">
            Hola Soy un cart
        </div>
      </div>
     
    </div>
  )
}
