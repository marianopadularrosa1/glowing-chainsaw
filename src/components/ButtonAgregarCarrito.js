export default function ButtonAgregarCarrito(props) {
    return (
      <button disabled={props.deshabilitarBoton} onClick={() => props.onAdd()}>
        {props.text}
      </button>
    );
  }
  