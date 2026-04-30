import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NoteView() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${id}`)
    
      .then(res => res.json())

                  .then(data => setData(data));
  }, [id]);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
                
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <img src={data.thumbnail?.source} className="mb-4" />

      <p className="text-lg">{data.extract}</p>

      <a
        href={data.content_urls?.desktop.page}
       
        target="_blank"
        
        className="text-blue-500 underline"
      >
        Read More 📖
      </a>
    </div>
  );
}