import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null)
  ;

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
        .then((data) => setBook(data))
      .catch((err) =>
         console.log(err));
  }, [id]);

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => 
            window.history.back()

        }
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        🔙 Back
      </button>


      <img
        src={book.formats["image/jpeg"] ||
             "https://via.placeholder.com/150"}
        alt={book.title}
        className="h-60 mx-auto object-contain"
      />

     
      <h1 className="text-3xl font-bold mt-6 text-center">
        {book.title}
      </h1>

     
      <p className="text-center text-gray-600 mt-2">
        {book.authors[0]?.name}
      </p>




      <div className="text-center mt-6">
        <a href={book.formats["text/html"]} target="_blank"className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Read Full Book 📖
        </a>
      </div>

    </div>
  );
}
export default BookDetail;