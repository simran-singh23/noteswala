const bookCategories = [
  {
    title: "Fiction",
    description: "Stories, novels te imaginative worlds readers layi.",
    count: "120 Books",
  },
  {
    title: "Islamic",
    description: "Deeni books, tafseer, hadees te islami learning.",
    count: "80 Books",
  },
  {
    title: "Academic",
    description: "School, college te competitive study material.",
    count: "95 Books",
  },
  
  {
    title: "Kids",
    description: "Bachiyan layi fun, learning te picture books.",
    count: "60 Books",
  },
  {
    title: "History",
    description: "Past events, biographies te civilizations di kahani.",
    count: "45 Books",
  },
  {
    title: "Self Help",
    description: "Growth, mindset te motivation improve karan wali books.",
    count: "70 Books",
  },
];

function Categories() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
            Book Categories
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Browse Books By Category
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Apni pasand de mutabiq category choose karo te asani naal books
            explore karo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {bookCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white 
              p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center 
              justify-center rounded-full bg-emerald-100 
              text-lg font-bold text-emerald-700">
                
                {category.title.charAt(0)}
              </div>
              <h2 className="text-2xl font-semibold
               text-slate-900">
                {category.title}
              </h2>
              <p className="mt-3 text-slate-600">{category.description}</p>
              <p className="mt-5 inline-block rounded-full
               bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
