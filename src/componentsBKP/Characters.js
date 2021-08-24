import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://rickandmortyapi.com/api/character");
      // esto siempre se hace usando fetch
      const data = await response.json();

      console.log("data", data);
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Characters</h1>
      {characters.map((item) => (
        <div style={{ border: "1px solid black", margin: "10px" }}>
          <h3>{item.name}</h3>
          <Link to={`/characters-detail/${item.id}`}>
            ver detalle del personaje
          </Link>
        </div>
      ))}
    </>
  );
}
