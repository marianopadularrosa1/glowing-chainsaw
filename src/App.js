
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer />
     
      </header>
      <section>
        <h1>Section</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
