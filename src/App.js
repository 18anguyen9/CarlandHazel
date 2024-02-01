import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact'
import Cat from './pages/cat/cat';


import HelloKitty from './pages/vday/home';
import Kerropi from './pages/vday/kerropi';
import Bat from './pages/vday/bat';
import Pom from './pages/vday/Pom';
import Melody from './pages/vday/melody';
import Sanrio_Home from './pages/vday/Sanrio_Home';

import { Link } from 'react-router-dom'
 
function App() {
  return (
    <BrowserRouter >
      <div className='h-[1000px]'>
        <Routes>
          <Route path="/CarlandHazel" element={<Sanrio_Home />}> </Route>
          <Route path="/CarlandHazel/home" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/CarlandHazel/cat" element={<Cat />}> </Route>
          <Route path="/CarlandHazel/ZaFrog" element={<Kerropi />}> </Route>
          <Route path="/CarlandHazel/HelloKitty" element={<HelloKitty />}> </Route>
          <Route path="/CarlandHazel/BatMaruCarlHeretoo" element={<Bat />}> </Route>
          <Route path="/CarlandHazel/POMPOM_Y_HAZEL" element={<Pom />}> </Route>
          <Route path="/CarlandHazel/melody" element={<Melody />}> </Route>
        </Routes>
      </div>
      
    
  </BrowserRouter>
  );
}

export default App;
