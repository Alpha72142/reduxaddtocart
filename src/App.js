import './App.css';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Header />
     <Routes>
       <Route path="/" element={<Cards/>} />
       <Route path="/cart/:id" element={<CardsDetails/>} />
     </Routes>
    </>
  );
}

export default App;
