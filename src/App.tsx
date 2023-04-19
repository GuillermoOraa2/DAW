//import { Suspense } from 'react';
import {useState} from "react";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/shared/header/header.tsx';
import Footer from './components/shared/footer/footer.tsx';
import Inicio from './components/views/inicio/inicio.tsx';
import Desarrollo from './components/views/desarrollo/desarrollo.tsx';
import LaEmpresa from './components/views/empresa/laEmpresa.tsx';
import Contacto from './components/views/contacto/contacto.tsx';
import Exitos from './components/views/casosExito/casosExito.tsx';
import Due from './components/views/due/due-diligence.tsx';
function App() {
  const [idioma, setIdioma]=useState('es');
  return (
    <div className="App">
      {/* <Suspense fallback='loading'> */}
      {/*Change header and footer according to route, react router*/}
      <Header cambiarIdioma={setIdioma}/>
      <Routes>
        <Route index element={<Inicio />}></Route>
        <Route path="productos-y-servicios" element={<Desarrollo idioma={idioma}/>}></Route>
        <Route path="due-diligence"element={<Due/>}></Route>
        <Route path="la-empresa" element={<LaEmpresa/>}></Route>
        <Route path="contacto" element={<Contacto/>}></Route>
        <Route path="casos-de-exito" element={<Exitos/>}></Route>
      </Routes>
      <Footer />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
