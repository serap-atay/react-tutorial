import { Route, Routes } from "react-router-dom";

import About from "./routingSample/About";
import Contact from "./routingSample/Contact";
import Home from "./routingSample/Home";
import SupplierDetail from "./routingSample/SupplierDetail";
import SupplierPage from "./routingSample/SupplierPage";
import Navbar from "./architect-template/Navbar";
import Header from "./architect-template/Header";
import PageContent from "./architect-template/PageContent";
import Footer from "./architect-template/Footer";
import ProductList2 from "./antDesignSample/ProductList2";

function App() {

  const group = {
    name: 'Moonspel',
    year: 1992,
    detail: {
      albumCount: 5
    }
  }




  return (
    <>
    <ProductList2></ProductList2>
      {/* <CartProvider> */}
       {/* <CartHeader></CartHeader> */}
        {/* <div>
      <nav style={{display:'flex', justifyContent:'space-around'}}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/suppliers" style={linkStyle}>Suppliers</Link>
      </nav>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/suppliers' element={<SupplierPage/>}></Route>
        <Route path='/suppliers/detail/:id' element={<SupplierDetail/>}></Route>
      </Routes> */}
        {/* <ProductList></ProductList> */}

      {/* </CartProvider> */}
    </>
    

  );
}

export default App;