import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function CardComponentHooks(props) {
  const [count, setCount] = useState(props.initial);
  const [initial] = useState(props.initial);
  const [stock] = useState(props.stock);

  useEffect(() => {
    console.log("aca soy un componentDidMount", count);
    if(count>=stock){setCount(stock);}
    if(count<=0){setCount(0);}
  }, [count,initial,stock]); 
  
  return (
    <React.Fragment>
      <h1>Cantidad: {count}</h1>
      <h1>initial: {initial}</h1>
      <h1>stock: {stock}</h1>
      <Button text="sumar" cuandohagoClick={() => setCount(count + 1)} />
      <Button text="restar" cuandohagoClick={() => setCount(count - 1)} />
    </React.Fragment>
  );
}