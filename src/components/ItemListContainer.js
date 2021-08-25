
import {  useState,useEffect } from "react";
import ItemList from "./ItemList";


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {


    setLoading(true);

    const fetchData = async () => {
        await fetch('/products.json')
          .then((res) => res.json())
          .then((res) => {
              setProducts(res); 
              console.log("RESPUESTA:"+res);})
          .catch((e) => console.error(e));
      };
  
      const timer = setTimeout(() => {
        fetchData();
      }, 3000);
      setLoading(false);
      return () => clearTimeout(timer);
      
    


  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Products Data....</h1>
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
