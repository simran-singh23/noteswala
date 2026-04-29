import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
setBooks(data.results);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Books 📚
      </h1>

      <div className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-2xl p-4 shadow hover:shadow-xl 
            transition duration-300"
          >
            <img
              src={book.formats["image/jpeg"]}
              alt={book.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold text-sm line-clamp-2">
              {book.title}
            </h2>

            <p className="text-gray-600 text-sm mt-1">
              {book.authors[0]?.name}
            </p>

            <Link
  to={`/book/${book.id}`}
  className="block mt-3 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
>
  Read Book
</Link>
          </div>
        ))}

      </div>
    </div>
  );
}