import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import PostCard, { type Post } from "./components/PostCard";
import { initialPosts } from './data/initialPosts';

function App() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className="min-h-screen bg-gray-50">
      <Header title="My Simple Blog"></Header>
      <main className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
          {t("current_posts")}
        </h1>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(posts.length !== 0) ? posts.map((post: Post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              date={new Date(post.date)}
              excerpt={post.excerpt}
            />
          )) : <h1>{t("no_post")}</h1>}
        </div>
      </main>
    </div>
  )
}

export default App
