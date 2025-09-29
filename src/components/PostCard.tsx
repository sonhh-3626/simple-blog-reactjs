export interface Post {
  id: number,
  title: string,
  author: string,
  date: Date,
  excerpt: string,
  content: string
}

export interface PostCardProps {
  id: number;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
}

export default function PostCard({ id, title, author, date, excerpt }: PostCardProps) {
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6 md:p-8 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 hover:underline transition-colors duration-200">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          By <span className="font-medium">{author}</span> on {date.toLocaleDateString()}
        </p>

        <p className="mt-4 text-gray-700 line-clamp-3">
          {excerpt}
        </p>

        <button className="mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Read More
        </button>
      </div>
    </div>
  )
}
