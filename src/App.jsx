import { Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Counter from './pages/Counter';

import '@styles/App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" >Home</Link>
        <Link to="/counter" >Counter</Link>
      </header>

      <div className="content">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/counter' exact element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
