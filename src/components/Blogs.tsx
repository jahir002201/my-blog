"use client";
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (error) return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-semibold mb-6 text-center">Latest Blog Posts</h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h4 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h4>
            <p className="text-sm text-gray-500 mb-4">
              By <span className="font-semibold">{post.author}</span> on <time dateTime={post.date_published}>{new Date(post.date_published).toLocaleDateString()}</time>
            </p>
            <p className="text-gray-700 mb-4">{post.content.slice(0, 150)}{post.content.length > 150 ? '...' : ''}</p>
            <a
              href={`/blog/${post.id}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              aria-label={`Read more about ${post.title}`}
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
