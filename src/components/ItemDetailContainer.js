
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import cafe1 from '../assets/cafe1.jpg';

// async function nombredelafuncion(){}

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const productos = [
        {id: 1, title: "Cafe Ristretto Italiano", 
        description: "Cafe Ristretto estilo italiano", 
        precio: 200,    image: cafe1,}
    ]

    try {
      // este response siempre nos devuelve un objeto para ejecutar una promesa
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1",
        //productos,
        {
          method: "GET",
          timeout : 2000,
        }
      );
      // siempre siempre que usemos fetch SIEMPREEEEEEEEE
      const data = await response.json();
      console.log(data);
      setItems(productos);

    } catch (error) {
      console.log("aca hay un error");
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      {items.map((i) => <ItemDetail item={i}/>)}
    </div>
  );
}
