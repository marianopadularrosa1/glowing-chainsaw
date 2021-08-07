
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [dolar, setDolar] = useState({});

  useEffect(() => {
    setLoading(true);
    const task = new Promise((resolve, reject) => {
      
      // simulando el request al servidor

      const fetchUsers = {
        data: {
          name: "Nicolas",
          lastName: "Restrepo"
        },
        status: "ok"
      };

      if (fetchUsers.status === "ok") {
        // el dato llego correctamente
        resolve(fetchUsers.data);
      } else if (fetchUsers.status === "404") {
        reject("hubo un error, no se encontro el usuario");
      }
    });

    task
      .then((fetchUserResponse) => {
        console.log("fetchUserResponse-->", fetchUserResponse);
        
        setUserData(fetchUserResponse);
      })
      .catch((error) => console.log("error", error));
      const fetchDolar = fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
      .then(response => response.json())
      .then(
          //responseDolar => console.log('fecha-->'+responseDolar.fecha + ', dolar VALOR:'+ responseDolar.compra)
          (responseDolar) =>{
            setDolar(responseDolar);
            setLoading(false)}
          );
      console.log('dolar-->'+dolar.compra);
     
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading user Data....</h1>
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
