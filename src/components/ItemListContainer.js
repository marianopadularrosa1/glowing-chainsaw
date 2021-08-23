import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component,useState } from "react";
import ItemList from "./ItemList";
import Button from "./button";
import { Link } from "react-router-dom";

export default function ItemListContainer() {

    const [category, setCategory] = useState([]);
        return(
            <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/products/:category">
            <ItemList />
          </Route>
        </Switch>
      </BrowserRouter>
             {/*<Button text="Grano" cuandohagoClick={() =>  setCategory("grano") } />*/}
            {/* <Button text="Molido" cuandohagoClick={() => setCategory("molido") } />*/}
            <ItemList category={category}/>
            </>
        )
        
    
}