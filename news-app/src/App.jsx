import { useEffect, useState } from "react";
import { getNews } from "./services/api";

const BACKEND_URL = "https://infostream-lqqv.onrender.com"; // ✅ your deployed backend

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");

  // 🔥 Fetch news
  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews(category);
      console.log("📰 NEWS DATA:", data);
      setArticles(data);
    };
    fetchData();
  }, [category]);

  // 🔍 Search filter
  const filteredArticles = articles.filter((article) =>
    article.title?.toLowerCase().includes(search.toLowerCase())
  );

  // ✨ Auto Summary Function (2–3 lines)
  const generateSummary = (text) => {
    if (!text) return "No summary available";

    const sentences = text.split(". ");
    return sentences.slice(0, 2).join(". ") + ".";
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-6">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        📰 InfoStream
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search news..."
          className="p-2 rounded-lg border w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["general", "business", "technology", "sports", "health"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              category === cat
                ? "bg-blue-500 text-white"
                : "bg-white border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ❗ If no news */}
      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-600">
          ⚠️ No news found... Check API key or console
        </p>
      )}

      {/* News Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            
            {/* Image */}
            <img
              src={article.urlToImage}
              alt="news"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800";
              }}
            />

            {/* Content */}
            <div className="p-4">
              
              <h2 className="font-semibold text-lg mb-2">
                {article.title}
              </h2>

              {/* ✨ AUTO SUMMARY */}
              <p className="text-gray-600 text-sm mb-3">
                {generateSummary(article.description || article.title)}
              </p>

              {/* Link */}
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="block mt-2 text-blue-500 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;