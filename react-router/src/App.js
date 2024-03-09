import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <link to='/'>Home</link>
             </li>
            <li>
              <link to='/'>About Us</link>
              
            </li>
            <li>
              <link to='/Packages'> Our Packages </link>
            </li>
          </ul>
        </div>

      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/packages' element={<Packages packages={packages} />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;





