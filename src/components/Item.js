import { Link } from "react-router-dom";
// se le dice a un componente bruto
// un componente que no tiene estado
// que solo recibe unas propiedades y las pinta
export default function Item({ item }) {
  return (
    <>
      <div style={{ border: "2px solid black", margin: "10px" }}>
        <div className="card-header mb-3 col 3">
          <div className="card-body">
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>
            <img
              src={`${item.img}`}
              className="card-img-top"
              alt="..."
              style={{ height: 200, width: 200 }}
            />
            <Link to={`/item/${item.id}`}> ver detalle del producto</Link>
          </div>
        </div>
      </div>
    </>
  );
}
