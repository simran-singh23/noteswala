import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "The Psychology of Money",
    image: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    id: 3,
    title: "Think and Grow Rich",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
  },
  {
    id: 4,
    title: "Do Epic Shit",
    image: "https://i.pinimg.com/736x/35/cd/63/35cd635dbf9d41a9da618a373bcf828c.jpg",
  },
  {
    id: 5,
    title: "Can't Hurt Me",
    image: "https://images-na.ssl-images-amazon.com/images/I/81gTRv2HXrL.jpg",
  },
  {
    id: 6,
    title: "Start With Why",
    image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
];

export default function MovingBooks() {
  return (
    <div className="overflow-hidden py-10 bg-gray-100">
 <h2 className="text-3xl font-bold text-center mb-6">
  <span className="border-b-4 border-blue-500 pb-1">
    📚 Featured Reads
  </span>
</h2>

      <div className="flex gap-6 animate-scroll w-max">
        {[...books, ...books].map((book, index) => (
          <Link to={`/book/${book.id}`} key={index}>
            <div className="min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
              
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-2 text-center font-medium">
                {book.title}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}