import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import './estilos/Estiloscomponentes.css';
import './estilos/Estilospaginas.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

import HomePage from './paginas/HomePage';
import NosotrosPage from './paginas/NosotrosPage';
import ServiciosPage from './paginas/ServiciosPage';
import ProductosPage from './paginas/ProductosPage';
import ContactosPage from './paginas/ContactoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactosPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;