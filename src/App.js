import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="app">
          <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
