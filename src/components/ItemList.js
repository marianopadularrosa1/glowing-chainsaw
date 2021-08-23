import { useEffect, useState,useParams } from "react";
import { Link } from "react-router-dom";
import { productsJson } from "./products.json";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsJson);
      }, 3000);
    })
      .then((products) => {
        console.log(products);
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  if (loading) {
    return (
      <div className="App">
        <h1>Loading Products Data....</h1>
      </div>
    );
  }
  
  else {
    return (
      <>
        <div className="App">
          <h1>Productos</h1>
          <div className="row container-fluid">
            {products.map((eachProduct) => (
              <Item item={eachProduct} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
