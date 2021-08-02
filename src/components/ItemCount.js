import React, { useState, useEffect } from "react";
import Button from "./button";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  const [initial] = useState(props.initial);
  const [stock] = useState(props.stock);
  const [deshabilitarBoton, setDeshabilitarBoton]= useState(false);

  useEffect(() => {
    if(stock<=0){setDeshabilitarBoton(true);}
    if(count>=stock){setCount(stock);}
    if(count<=0){setCount(0);}
  }, [count,initial,stock]); 
  
  return (
    <React.Fragment>
      <h1>contador: {count}</h1>
      <h1>initial: {initial}</h1>
      <h1>stock: {stock}</h1>
      <Button deshabilitarBoton={deshabilitarBoton} text="sumar" cuandohagoClick={() => setCount(count + 1)} />
      <Button text="restar" cuandohagoClick={() => setCount(count - 1)} />
    </React.Fragment>
  );
}