import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import BookDetail from "./Pages/BookDetail";
function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
          
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

 <Route path="/categories" element={<Categories />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

<Route path="/book/:id" element={<BookDetail />} />
      </Routes> 

    </BrowserRouter>
    
  );
}

export default App;
