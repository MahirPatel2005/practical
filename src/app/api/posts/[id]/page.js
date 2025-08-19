'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <h1>/api/posts/{id} – GET by ID</h1>
      {loading ? (
        <p>Loading post...</p>
      ) : post && post.id ? (
        <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
          <h3 style={{ margin: 0 }}>{post.title}</h3>
          <p style={{ margin: '8px 0 0 0' }}>{post.body}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}