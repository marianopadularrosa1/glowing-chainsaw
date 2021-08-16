// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function ItemDetail({item}) {
    return (
      <>
        <h1>id:{item.id}</h1>
        <h1>title:{item.title}</h1>
        <h1>description:{item.description}</h1>
        <h1>precio:${item.precio}.-</h1>
        <img src={item.image}  style={{ height: 53, width: 36 }} alt="image"/>
      </>
    );
  }
  