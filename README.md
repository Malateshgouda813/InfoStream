# InfoStream
 InfoStream

InfoStream is a modern news web app that delivers real-time updates across multiple categories. It features a clean, responsive UI with search and filtering for easy navigation. The app generates quick 2–3 line summaries so users can grasp news instantly. Built with React, Tailwind CSS, and Node.js, it optionally integrates AI for advanced summarization. It’s designed for fast, simple, and efficient news consumption.


## Preview

![App Preview](https://github.com/Malateshgouda813/InfoStream/blob/55e4be682062a0e1b0802f08e676c61ed27507d4/home...png)
![App Preview](https://github.com/Malateshgouda813/InfoStream/blob/aeee34607a79ec266c22607d3f645058fd8e9f76/home.....png)


##  Features

-  Real-time news fetching using News API  
-  Automatic 2–3 line summaries (no click needed)  
-  Search functionality  
-  Category filtering (General, Business, Tech, Sports, Health)  
-  Fully responsive UI  
-  Clean modern design using Tailwind CSS  



##  Tech Stack

### Frontend
-  React (Vite)
-  Tailwind CSS
-  Axios

### Backend (Optional AI)
-  Node.js
-  Express.js
-  Gemini AI (for advanced summarization)

---

## 📁 Project Structure

```
InfoStream/
│
├── backend/
│   ├── server.js
│   ├── .env 
│   └── package.json
│
├── news-app/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── services/api.js
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── .gitignore
```

---

## ⚙️ Installation & Setup

### Clone the repo

```bash
git clone https://github.com/Malateshgouda813/InfoStream.git
cd InfoStream
```

---

###  Frontend Setup

```bash
cd news-app
npm install
npm run dev
```

---

###  Backend Setup (Optional)

```bash
cd backend
npm install
nodemon server.js
```

---

##  Environment Variables

Create a `.env` file inside `backend/`:

```env
GEMINI_API_KEY=your_api_key_here
```



---

##  API Used

- News API → https://newsapi.org/
- Gemini AI → https://ai.google.dev/

---

##  Current Limitations

- Some images may fail due to CORS restrictions  
- Free APIs may have rate limits  
- AI summarization depends on API availability  

---

##  Future Improvements

- ✅ User authentication (JWT)
- 🌐 Deploy frontend + backend
- 📊 Trending news dashboard
- ❤️ Save/bookmark articles
- 🧠 Better AI summarization



## Contributing

Pull requests are welcome!  
Feel free to open issues for suggestions or improvements.



## Acknowledgements

- News API for real-time data  
- Google Gemini for AI capabilities  
- Tailwind CSS for beautiful UI  



⭐ If you like this project, give it a star!
