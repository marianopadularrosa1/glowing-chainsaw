
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home.js";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header"></header>
      <section>
        <h1>Section</h1>
      </section>
      <Footer nombre="Tasty Coffee" />
    </div>
  );
}
