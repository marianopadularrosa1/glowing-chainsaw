
import './App.css';
import NavBar from './components/NavBar.js';
import CardComponent from './components/CardComponent';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greetings={'PARAMETRO1'}/>
      </header>
      <section>
        <h1>Hola soy h1</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
