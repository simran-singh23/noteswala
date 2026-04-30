import { Link } from "react-router-dom";

const notes = [
  {
    id: 1,
    title: "Psychology",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png",
  },
  {
    id: 2,
    title: "Physics",
    image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
  },
  {
    id: 3,
    title: "Chemistry",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920056.png",
  },
  {
    id: 4,
    title: "Mathematics",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  },
  {
    id: 5,
    title: "Science",
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
];

export default function Notes() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
      
      {notes.map((note) => (
        <Link key={note.id} to={`/note/${note.title.toLowerCase()}`}>
          
          <div className="bg-white p-4 shadow rounded text-center hover:scale-105 transition">
            
            <img
              src={note.image}
              alt={note.title}
              className="h-20 mx-auto mb-2"
            />

            <h3>{note.title}</h3>

          </div>

        </Link>
      ))}

    </div>
  );
}