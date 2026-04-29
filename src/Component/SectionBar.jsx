function SectionBar({ dark }) {
  return (
    <section
      className={
        dark
          ? "bg-slate-900 px-6 py-16"
          : "bg-slate-100 px-6 py-16"
      }
    >
      <div
        className={
          dark
            ? "mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-slate-800 p-8 shadow-lg md:grid-cols-2"
            : "mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2"
        }
      >
        <div>
          <p
            className={
              dark
                ? "mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400"
                : "mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-600"
            }
          >
            Noteswala
          </p>

          <h2
            className={
              dark
                ? "text-4xl font-bold leading-tight text-white"
                : "text-4xl font-bold leading-tight text-slate-900"
            }
          >
            Read & Explore Books 📚
          </h2>

          <p
            className={
              dark
                ? "mt-4 text-lg text-slate-300"
                : "mt-4 text-lg text-slate-600"
            }
          >
            Discover thousands of free books and expand your knowledge.
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore More
          </button>
        </div>

        <div>
          <img
            src="https://i.pinimg.com/1200x/d7/7e/2c/d77e2cbb6e65816d6893803e0190a4e1.jpg"
            alt="Noteswala hero"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionBar;