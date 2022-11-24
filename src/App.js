import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/components/Categories' element={<Categories/>}></Route>
        <Route path='/pages/login' element={<Login/>}></Route>
        <Route path='./pages/Register' element={<Register/>}></Route>
        <Route path='./pages/Products' element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
 
  </>
  
  )
};

export default App;