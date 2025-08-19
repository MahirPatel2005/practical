'use client';

import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>/api/posts – GET Request</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '2rem', border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
              <h3 style={{ margin: 0 }}>{post.title}</h3>
              <p style={{ margin: '8px 0 0 0' }}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}