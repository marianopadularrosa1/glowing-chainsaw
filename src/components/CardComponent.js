import { Component } from "react";
import Count from "./Count";

export default class CardComponent extends Component {
  state = {
    count: this.props.count ? this.props.count : 0,
  };
  componentDidMount() {
    console.log("mi estado del count en didmount");
  }

  // cuando el componente se actualiza dispara esta funcion
  componentDidUpdate() {
    console.log("me actualice");
    console.log("mi estado del count en didUpdate", this.state.count);
  }

  sumar = () => {
    console.log("this", this);

    this.setState({
      count: this.state.count + 1,
    });
  };

  restar = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <h1>
        <Count count={this.state.count} />
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
        {this.props.user.name}
        {this.props.user.edad}
      </h1>
    );
  }
}

// una forma de exportalo
// export default CardComponent
