import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import PostCard, { type Post } from "./components/PostCard";
import { initialPosts } from './data/initialPosts';

function App() {
  const { t } = useTranslation();
  const posts: Post[] = initialPosts || [];

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
              date={post.date}
              excerpt={post.excerpt}
            />
          )) : <h1>{t("no_post")}</h1>}
        </div>
      </main>
    </div>
  )
}

export default App
