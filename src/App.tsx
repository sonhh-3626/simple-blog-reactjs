import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import { type Post } from "./components/PostCard";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PostDetail from "./components/PostDetail";
import { initialPosts } from './data/initialPosts';
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      let dataFromLocalStorage = localStorage.getItem("posts");
      if(dataFromLocalStorage) {
        setPosts(JSON.parse(dataFromLocalStorage));
      } else {
        setPosts(initialPosts);
      }
    } catch (error) {
      console.error(t("error_read_from_local_storage"), error);
      setPosts(initialPosts);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    if(!loading) {
      try {
        localStorage.setItem("posts", JSON.stringify(posts));
      } catch (error) {
        console.error(t("error_write_to_local_storage"), error);
      }
    }
  }, [posts, loading]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header title="My Simple Blog"></Header>
        <main className="max-w-screen-xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-post" element={<PostForm setPosts={setPosts} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

  )
}

export default App
