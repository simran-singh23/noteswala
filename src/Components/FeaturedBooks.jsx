import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BooksSlider() {
     const navigate = useNavigate(); 
  const [books, setBooks] = useState([]);
  const scrollRef = useRef();

 
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.results.slice(0, 12)))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1; 
      }
    }, 20);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="bg-gray-200 py-12 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">
        Trending Books
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth"
      >
       {books.map((book) => (
  <div
    key={book.id}
    onClick={() => navigate(`/book/${book.id}`)}
    className="min-w-[200px] bg-white rounded-xl p-3 cursor-pointer hover:scale-105 transition"
  >
    <img
      src={book.formats["image/jpeg"]}
      alt={book.title}
      className="w-full h-60 object-cover rounded-lg"
    />

    <h3 className="mt-2 text-sm font-semibold">
      {book.title}
    </h3>

    <p className="text-xs text-gray-500">
      {book.authors[0]?.name || "Unknown"}
    </p>
  </div>
))}
      </div>
    </section>
  );
}