// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function Item(props) {
  return (
    <>
      <h3>id:{props.id}</h3>
      <h3>title:{props.title}</h3>
      <h3>description:{props.description}</h3>
    </>
  );
}
