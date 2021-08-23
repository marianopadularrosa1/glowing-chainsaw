import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "./products.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productsJson.filter((item) => item.id === id)),
        1000
      );
    }).then((data) => {
      setProduct(data[0]);
      setLoading(false);
    });
  }, []);

  console.log("product", product);
  if (loading) {
    return (
      <div className="App">
        <h1>Loading Product Data....</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="row container-fluid">
          <ItemDetail {...product} />;
        </div>
      </>
    );
  }
}
