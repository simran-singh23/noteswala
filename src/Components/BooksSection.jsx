import bookVideo from "../assets/book.mp4"; 

export default function BooksSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-10">
      
      <div className="flex flex-col md:flex-row items-center gap-20 max-w-6xl">
   
        <div className="w-full md:w-1/2">
          <video
            src={bookVideo}
            autoPlay
            loop
            muted
           className="rounded-xl shadow-lg w-full h-72 object-cover"
          ></video>
        </div>

     
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            The Power of Books 📚
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Books are a gateway to endless knowledge and imagination. They allow
            us to explore new worlds, understand different perspectives, and
            improve our thinking abilities. Whether it's learning a new language,
            gaining technical skills, or simply enjoying a story, books play a
            vital role in personal growth.
            <br /><br />
            Reading regularly helps improve focus, vocabulary, and creativity. It
            builds confidence and opens doors to new opportunities. In today's
            digital world, books remain one of the most powerful tools for
            learning and self-development. Start your journey today and discover
            how books can transform your life.
          </p>
        </div>

      </div>
    </div>
  );
}