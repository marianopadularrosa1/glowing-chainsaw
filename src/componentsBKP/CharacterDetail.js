import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      // esto siempre se hace usando fetch
      const data = await response.json();

      console.log("data", data);
      setCharacter(data);
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
    <div>
      <Link to="/characters">volver a caracteres</Link>

      <h1>Detail</h1>
      <img src={character.image} />
      <h3>{character.name}</h3>
    </div>
  );
}
