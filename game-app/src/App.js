import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Juego from './componentes/Juego';

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Juego />} />
        </Routes>
    </Router>
  )
}

export default App;
