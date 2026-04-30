import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import BookDetail from "./Pages/BookDetail";
import BookView from "./Pages/BookView"
import NoteView from "./Pages/NoteView";
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
  <Route path="/book/:id" element={<BookView />} />

<Route path="/note/:id" element={<NoteView />} />
      </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
