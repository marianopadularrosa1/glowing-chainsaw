import { Component } from "react";

export default class ItemListContainer extends Component {
    state = {
        greetings: this.props.greetings ? this.props.greetings : 'vacio',
      };
    render(){
        return(
            <h1>Hola soy el ItemListContainer {this.props.greetings}</h1>
        )
        
    }
}