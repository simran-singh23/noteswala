import { useState } from "react";
import SectionBar from "../Components/SectionBar";
import Books from "./Books";
import MovingBooks from "../Components/MovingBooks";
import Notes from "../Components/Notes";
import HeroSection from "./HeroSection";
import BackgroundSection from "../Components/BackgroundSection";
import BooksSection from "../Components/BooksSection";
import Footer from "../Components/Footer"; 
import FeaturedBooks from "../Components/FeaturedBooks"; 
import BooksTimeline from "../Components/BooksTimeline";
function Home() {   

  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      
      <button
        onClick={() => setDark(!dark)}
        className="p-2 m-4 border rounded"
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <SectionBar dark={dark} />
      <Books />
      <MovingBooks />
           <Notes />  
              <HeroSection />
                 <BackgroundSection />
                       <BooksSection />
                           <FeaturedBooks />
                                 <BooksTimeline />
                       <Footer/>
    </div>
  );
}

export default Home;
