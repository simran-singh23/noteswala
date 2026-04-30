import footerImg from "../assets/footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 px-10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        
      
        <div className="flex justify-center">
          <img
            src={footerImg}
            alt="footer"
            className="rounded-2xl shadow-2xl w-64 hover:scale-105 transition duration-500"
          />
        </div>

      
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            📚 Start Your Learning Journey
          </h2>

          <p className="text-gray-400">
            Discover books, notes and knowledge that will shape your future.
          </p>

          <Link
            to="/books"
            className="inline-block mt-5 bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Explore Now
          </Link>
        </div>

        
        <div className="flex flex-col items-center md:items-end space-y-3">
          <Link to="/" className="hover:text-orange-400 transition">
            Home →
          </Link>

                <Link to="/about" className="hover:text-orange-400 transition">
            About →
          </Link>
          <Link to="/books" className="hover:text-orange-400 transition">
            Books →
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition">
            Contact →
          </Link>
        </div>

      </div>

      <div className="mt-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-center text-gray-300">
       ✨ Helping you learn smarter | © 2026 Noteswala
      </div>

    </footer>
  );
}