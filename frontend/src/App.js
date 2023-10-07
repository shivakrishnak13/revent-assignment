import './App.css';
import { Navbar } from './components/Navbar';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductPage/>
    </div>
  );
}

export default App;
