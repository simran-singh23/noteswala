import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BooksTimeline() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const urls = [
      "https://gutendex.com/books?search=history",
      "https://gutendex.com/books?search=science",
      "https://gutendex.com/books?search=love",
    ];

    Promise.all(urls.map((url) => 
        fetch(url).then((res) => res.json())))
      .then((data) => {
        const merged = data.flatMap((d) => d.results);
        setBooks(merged.slice(0, 5)); 
          setLoading(false); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-pink-900 via-black to-slate-900 py-16 px-6">
      
 
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Explore Books Collection 📚
      </h2>

      <div className="relative max-w-5xl mx-auto">
        

        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-700 -translate-x-1/2"></div>

        {books.map((book, index) => (
          <div
            key={book.id}
            className={`mb-16 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              onClick={() => navigate(`/book/${book.id}`)}
              className="relative w-[260px] cursor-pointer group"
            >

         
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

           
              <div className="p-5 rounded-2xl shadow-xl bg-slate-800 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                
  
                <img
                  src={
                    book.formats["image/jpeg"] ||
                    book.formats["image/png"] ||
                    "https://via.placeholder.com/150"
                  }
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />


                <p className="text-sm font-bold text-orange-400">
                  {index + 1}
                </p>

          
                <h3 className="text-lg font-semibold text-white mt-1">
                  {book.title}
                </h3>

              
                <p className="text-xs text-gray-400 mt-1">
                  {book.authors[0]?.name || "Unknown"}
                </p>

     
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                  {book.summaries?.[0] ||
                    "No summary available for this book."}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}