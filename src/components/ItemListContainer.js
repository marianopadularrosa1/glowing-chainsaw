import { useParams } from "react-router-dom";
import {  useState,useEffect } from "react";
import ItemList from "./ItemList";

import { productsJson } from "./products.json";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryid } = useParams();
  
  console.log('categoryid--->'+categoryid);
  useEffect(() => {
    setLoading(true);
    if(categoryid!==undefined){
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsJson.filter((item) => item.category === categoryid))},3000);
            }).then((data) => {
                console.log('data--->'+JSON.stringify(data));
              setProducts(data);
              setLoading(false);
            });
    }
    else{
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsJson)},3000);
            }).then((data) => {
                console.log('data--->'+JSON.stringify(data));
              setProducts(data);
              setLoading(false);
            });
    }

  }, [categoryid]);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Products {categoryid} Data....</h1>
      </div>
    );
  }else{
  return (
    <>
      <ItemList productos={products} />
    </>
  );
}
}
