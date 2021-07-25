
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      </header>
      <section>
        <h1>Hola soy h1</h1>
      </section>
      <Footer nombre="Tasty Coffee"/>
    </div>
  );
}

export default App;
