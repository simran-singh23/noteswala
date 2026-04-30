import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-slate-100 min-h-screen p-6 font-punjabi">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          ਸਾਡੇ ਬਾਰੇ 📚
        </h1>

        <p className="text-lg text-slate-700 mb-6">
          ਨੋਟਸਵਾਲਾ ਇੱਕ ਆਧੁਨਿਕ ਵੈਬਸਾਈਟ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਕਿਤਾਬਾਂ, ਨੋਟਸ ਅਤੇ ਅਖਬਾਰ ਲੱਭ ਸਕਦੇ ਹੋ।
        </p>


        <div className="grid md:grid-cols-3 gap-6">
          <img src="https://i.pinimg.com/1200x/00/bc/47/00bc47844070eab95c42d24d7a1f242e.jpg"
           className="rounded-xl shadow-md" />
          <img src="https://i.pinimg.com/736x/26/2b/e4/262be43cacb9e023115bd929e2b96fb0.jpg"
           className="rounded-xl shadow-md" />
          <img src="https://i.pinimg.com/736x/09/29/46/092946422c92186064e7745721e84ab6.jpg"
           className="rounded-xl shadow-md" />
        </div>

        <p className="text-center mt-8 text-lg text-slate-700">
          ਸਾਡਾ ਮਕਸਦ ਹੈ ਕਿ ਹਰ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਹੀ ਸਮੱਗਰੀ ਮਿਲੇ 📚
        </p>

      </div>

    
      <footer className="bg-slate-900 text-white px-6 py-10 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">
              Noteswala 📚
            </h2>
            <p className="text-slate-300">
              ਨੋਟਸਵਾਲਾ ਇੱਕ ਐਸੀ ਵੈਬਸਾਈਟ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਕਿਤਾਬਾਂ, ਨੋਟਸ ਅਤੇ ਅਖਬਾਰ ਲੱਭ ਸਕਦੇ ਹੋ।
            </p>
          </div>

        
          <div>

            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">

              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">About</Link>
              </li>

              <li>
                <Link to="/books" className="hover:text-blue-400">Books</Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact</Link>
              </li>

            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-slate-300">📧 noteswala@gmail.com</p>
            <p className="text-slate-300 mt-2">📍 India punjab</p>
          </div>

        </div>

        <div className="text-center text-slate-400 mt-8 border-t border-slate-700 pt-4">
          © 2026 Noteswala. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default About;