
export default function BackgroundSection() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/00/56/ad/0056ada1442021afeb69fbe1ed6ab91d.jpg')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center justify-center">
        
        <div className="text-center text-white px-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            Learn Anytime, Anywhere
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Education made simple and accessible
          </p>
        </div>


      </div>
    </div>
  );
}