import { useState } from "react";
import SectionBar from "../Components/SectionBar";
import Books from "./Books";
import MovingBooks from "../Components/MovingBooks";
import Notes from "../Components/Notes";
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
    </div>
  );
}

export default Home;
