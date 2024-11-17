import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MyWordsPage from "./pages/MyWordsPage";
import LearnPage from "./pages/LearnPage";
import ArticlesPage from "./pages/ArticlesPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MyWordsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
