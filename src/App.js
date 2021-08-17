
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemDetailContainer />
     {/*<TestPromise/>*/}
     {/*<ItemCount initial="2" stock="8"/>*/}
     {/*<RickMortyCharacter/>*/}
      </header>
      <section>
        <h1>Section</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
