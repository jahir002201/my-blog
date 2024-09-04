"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
}

export default function BlogPostPage() {
  const { id } = useParams(); // useParams to get the dynamic [id] from the URL
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/blogs`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Blog post not found');
          }
          return response.json();
        })
        .then((data) => {
          const post = data.find((post: BlogPost) => post.id === Number(id));
          if (post) {
            setBlogPost(post);
          } else {
            setError('Blog post not found');
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="mt-2 text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">No blog post found.</p>
      </div>
    );
  }

  return (
    <main>
      <article className="prose lg:prose-xl mx-auto bg-white p-8 rounded-lg shadow-lg my-10">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="text-gray-600 mb-4">
          By <span className="font-semibold">{blogPost.author}</span> on {new Date(blogPost.date_published).toLocaleDateString()}
        </p>
        <div className="text-lg leading-relaxed">
          {blogPost.content}
        </div>
      </article>
    </main>
  );
}
