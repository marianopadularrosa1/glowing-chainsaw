
import { useState, useEffect } from "react";

// async function nombredelafuncion(){}

export default function MealContainer() {
  const [characters, setCharacter] = useState([]);

  const getCharacterFromApi = async () => {
    /* fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    })
    .then((response) => response.json())
    .then(data => console.log('aca tengo mi data', data))
    .catch(error => console.log('aca hay un error'))
    */

    // esto es igual

    try {
      // este response siempre nos devuelve un objeto para ejecutar una promesa
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
        {
          method: "GET"
        }
      );
      // siempre siempre que usemos fetch SIEMPREEEEEEEEE
      const data = await response.json();
      console.log("hola1:"+JSON.stringify(data.meals));
      setCharacter(data.meals);
    } catch (error) {
      console.log("error"+error.message);
    }
  };

  useEffect(() => {
    getCharacterFromApi();
  }, []);

  return (
    <div className="App">
      {characters.map((character) => <>
      <div>
        <h1>{character.strMeal}</h1>
        <h1>{character.idMeal}</h1>
        <img src={character.strMealThumb}  style={{ height: 53, width: 36 }} />
      </div>
      </>)}
    </div>
  );
}
