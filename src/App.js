import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/AppContext';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';


function App() {
  return (
    <ContextProvider>
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/test' Component={Test} />
      </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
