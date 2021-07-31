export default function Button(props) {
    return (
      <button onClick={() => props.cuandohagoClick()}>
        {props.text}
      </button>
    );
  }
  