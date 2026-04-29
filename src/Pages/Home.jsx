import { useState } from "react";
import SectionBar from "../Component/SectionBar";

function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      
      <button
        onClick={() => 
            setDark(!dark)}
        className="p-2 m-4 border rounded"
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <SectionBar dark={dark} />
    </div>
  );
}

export default Home;
