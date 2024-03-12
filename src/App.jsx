import logo from '@assets/logo192.png';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
        </Link>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/counter' exact element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
