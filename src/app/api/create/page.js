'use client';

import { useEffect, useState } from 'react';

export default function CreatePage() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const newPost = {
      title: "New Post Title",
      body: "This is the body of the new post.",
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => setResponse(data));
  }, []);

  return (
    <div>
      <h1>/create – POST Request</h1>
      <pre>{response ? JSON.stringify(response, null, 2) : 'Creating post...'}</pre>
    </div>
  );
}