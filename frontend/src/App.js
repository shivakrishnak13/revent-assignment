import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
