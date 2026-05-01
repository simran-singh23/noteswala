import { useEffect, useState } from "react";

export default function Explore() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.results))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
<h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 leading-tight">
  Discover Your Next Great Read
</h1>

<p className="text-center text-slate-600 mt-3 text-lg">
  Explore thousands of books, expand your knowledge,
  and dive into stories that inspire your journey.
</p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="rounded-xl bg-white p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={book.formats["image/jpeg"]}
              alt={book.title}
              className="h-60 w-full rounded-lg object-cover"
            />

            <h2 className="mt-3 text-lg font-semibold">
              {book.title}
            </h2>

            <p className="text-sm text-gray-600">

              {book.authors[0]?.name || "Unknown"}
            </p>

            <a
              href={book.formats["text/html"]}
              target="_blank"
              className="mt-3 inline-block text-blue-600 font-medium"
            >
              Read Book →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}