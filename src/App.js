import './App.css';
import Home from './pages/Home';
import Menu from './layout/Menu';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Politica from './pages/Politica';
import Loginx from './pages/Loginx';
import Pr from './components/Pr';
import Car from './components/Carrinho';
import Tn from './components/Tn';
import Rn from './components/Rn';
import Saude from './components/Saude';
import Contato from './components/Contato';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
        <Menu/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/politica" element={<Politica/>} />
          <Route path="/login" element={<Loginx/>} />
          <Route path='/pr' element={<Pr/>} />
          <Route path='/car' element={<Car/>}/>
          <Route path='/tn' element={<Tn/>}/>
          <Route path='/rn' element={<Rn/>}/>
          <Route path='/saude' element={<Saude/>}/>
          <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </Router>
  );
}
export default App;