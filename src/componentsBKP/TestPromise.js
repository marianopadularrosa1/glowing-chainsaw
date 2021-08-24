
import { useEffect, useState } from "react";

export default function TestPromise() {
  const [loading, setLoading] = useState(false);
  const [dolar, setDolar] = useState({});

  useEffect(() => {
    setLoading(true);
    const task = new Promise((resolve, reject) => {

      const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
      fetchPromise.then(response => {
        return response.json();
      }).then(people => {
        const names = people.map(person => person.name).join("\n");
        console.log("People names:"+names);
      });
      
      // simulando el request al servidor
      const fetchDolar = fetch("https://pure-wave-58664.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolaroficial");
      fetchDolar.then(response => {
        return response.json();
      }).then(responseDolar => {
        setDolar(responseDolar); setLoading(false)
        console.log("responseDolar-->", responseDolar);
      });
    
    });


     
      console.log('dolar-->'+dolar.compra);
     
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading Dolar Data....</h1>
      </div>
    );
  }else{

      return (
        <div className="App">
          <h1>Dolar Hoy</h1>
          <h2>Dolar Compra : {dolar.compra}</h2>
          <h2>Dolar Venta : {dolar.venta}</h2>
          <h2>Dolar Fecha : {dolar.fecha}</h2>
        </div>
      );
  }
}
