
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Section1 from './ScreenPage/Section1';

function App() {
  return (
    <div>
     <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section1/>}/>
      </Routes>
     </BrowserRouter>
      </div>
  );
}

export default App;
