import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer';
import Details from './Pages/Home/Details';
import { createContext, useState } from 'react';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
export const DetailsContext=createContext();

function App() {
  const [projects,setProjects]=useState([])
  return (
    <div className="App">
        <DetailsContext.Provider value={[projects,setProjects]}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='about' element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
        </DetailsContext.Provider>
    </div>
  );
}

export default App;
