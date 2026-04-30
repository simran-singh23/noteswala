import { useParams } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "The Psychology of Money",
    description: "This book teaches how people think about money.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    description: "Focus deeply and avoid distractions.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
  },
];

export default function BookView() {
  const { id } = useParams();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2 className="text-center mt-10">Book not found ❌</h2>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full">
        
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-2xl font-bold mt-4">
          {book.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {book.description}
        </p>

      </div>
    </div>
  );
}