
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greetings={'PARAMETRO1'}/>
      <ItemCount stock={8} initial={2}/>
      </header>
      <section>
        <h1>Section</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
