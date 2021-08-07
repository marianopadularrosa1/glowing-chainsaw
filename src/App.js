
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import TestPromise from './components/TestPromise';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greetings={'PARAMETRO1'}/>
      <ItemCount stock={8} initial={1}/>
      <TestPromise/>
      </header>
      <section>
        <h1>Section</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
