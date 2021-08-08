// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function Item({item}) {
  return (
    <>
      <h3>id:{item.id}</h3>
      <h3>title:{item.title}</h3>
      <h3>description:{item.description}</h3>
    </>
  );
}
