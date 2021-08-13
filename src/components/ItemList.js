import { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
   
    new Promise((resolve, reject)=>{
        const productos = [
            {id: 1, title: "Cafe Ristretto Italiano", description: "Cafe Ristretto estilo italiano", price: 200,    pictureUrl: ""},
              {id: 2, title: "Cafe Colombiano en grano", description: "Cafe tostado en grano desde Colombia", price: 1400,pictureUrl: ""},
              {id: 3, title: "Cafe Brasilero en grano",description: "Cafe en tostado en grano desde Brasil",price: 1000,pictureUrl: "",
              },
            ];
        setTimeout(() => { 
            resolve(productos)
        }, 2000);
    })
        .then((products)=>{
            console.log(products);
            setProducts(products);
        })
        .catch((error)=>{
            console.log(error.message);
        });
  }, []);


      return(
          <div >
              {products.map((eachProduct)=> <Item item={eachProduct}  /> )}
          </div>
      )
 

  
}
