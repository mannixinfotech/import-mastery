
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Section1 from './ScreenPage/Section1';
import Contact from './ScreenPage/Contact';
import Footer from './componets/Footer';
import About from './ScreenPage/About';
import Portfolio from './ScreenPage/Portfolio';

function App() {
  return (
    <div>
     <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
      </div>
  );
}

export default App;
