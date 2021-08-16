
import { useState, useEffect } from "react";

// async function nombredelafuncion(){}

export default function RickMortyCharacter() {
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
        "https://rickandmortyapi.com/api/character",
        {
          method: "GET"
        }
      );
      // siempre siempre que usemos fetch SIEMPREEEEEEEEE
      const data = await response.json();

      setCharacter(data.results);
    } catch (error) {
      console.log("aca hay un error");
    }
  };

  useEffect(() => {
    getCharacterFromApi();
  }, []);

  return (
    <div className="App">
      {characters.map((character) => <>
        <img src={character.image} />
        <h1>{character.name}</h1>
      </>)}
    </div>
  );
}
