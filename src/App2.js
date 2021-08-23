
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Characters from "./components/Characters";
import Home from "./pages/Home.js";
import CharacterDetail from "./components/CharacterDetail";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/characters-detail/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
