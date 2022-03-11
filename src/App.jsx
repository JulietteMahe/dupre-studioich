import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Ebooks from "./pages/Ebooks";
import Prestations from "./pages/Prestations";
import Concept from "./pages/Concept";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/concept' element={<Concept />}/>
        <Route path='/ebooks' element={<Ebooks />}/>
        <Route path='/prestations' element={<Prestations />}/>        
      </ Routes>
      <Footer />
    </div>
  );
}

export default App;

/*<Routes>
<Route path="/" element={<Home />} />
</Routes>
<Footer />*/