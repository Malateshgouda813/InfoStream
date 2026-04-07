import axios from "axios";

const API_KEY = "6da58c74c6b147c4ab468659024c4c00";

export const getNews = async (category = "general") => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${API_KEY}`
    );

    console.log("✅ NEWS RESPONSE:", res.data);

    return res.data.articles || [];
  } catch (error) {
    console.error("❌ API ERROR:", error.response?.data || error.message);
    return [];
  }
};