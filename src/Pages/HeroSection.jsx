export default function HeroSection() {
  return (
    <div className="bg-orange-50 p-10 flex items-center justify-between">
      
     
      <div className="max-w-lg">
        <h3 className="text-orange-500 font-semibold text-lg">
          Learn New Languages
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          Foundation Made Simple, <br />
          Learning Made Joyful — Begin Here!
        </h1>

        <p className="mt-4 text-gray-600">
            
          Enter the World of Primers{" "}
          <span className="text-green-600 font-semibold">
            Discover Words, Unlock Worlds
          </span>
        </p>

        <p className="mt-3 text-red-500 font-bold">
          FREE <span className="text-black font-normal">for all users</span>
        </p>
      </div>


      <div>
        <img
          src="https://i.pinimg.com/736x/ec/aa/53/ecaa534078dbb750e2dc591ef6a81b20.jpg"
          alt="books"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}