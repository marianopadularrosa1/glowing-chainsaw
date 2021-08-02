export default function Button(props) {
    return (
      <button disabled={props.deshabilitarBoton} onClick={() => props.cuandohagoClick()}>
        {props.text}
      </button>
    );
  }
  