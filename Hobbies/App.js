import { Slide } from 'react-slideshow-image';
import './App.css';
import InventoryList from './slideshow.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Viraj's Grocery Store</h2>
      </header>
      <h2 id="inventory">Inventory</h2>
      <div class="data">
          <Slider />
      </div>  
      <footer className="App-footer">
        <p> &copy; 2024 Viraj Grocery Store</p>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#policy">Privacy Policy</a></li>
        </ul>
      </footer>  
    </div>
  );
}

export default App;