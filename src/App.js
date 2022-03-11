import { Route, Routes } from "react-router-dom";
import About from "./routingSample/About";
import Contact from "./routingSample/Contact";
import Home from "./routingSample/Home";
import SupplierDetail from "./routingSample/SupplierDetail";
import SupplierPage from "./routingSample/SupplierPage";


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
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/suppliers' element={<SupplierPage/>}></Route>
        <Route path='/suppliers/detail/:id' element={<SupplierDetail/>}></Route>
      </Routes>

    </>

  );
}

export default App;