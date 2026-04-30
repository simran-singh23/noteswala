// Books.jsx
const booksData = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 3,

    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Héctor García",

    image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
];

export default function Books() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📚 Books Library
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}