
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function UpdatePage() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (id) {
      const updatedPost = {
        id,
        title: "Updated Title",
        body: "Updated body content",
        userId: 1
      };

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
      })
        .then(res => res.json())
        .then(data => setResponse(data));
    }
  }, [id]);

  return (
    <div>
      <h1>/update/{id} – PUT Request</h1>
      <pre>{response ? JSON.stringify(response, null, 2) : 'Updating...'}</pre>
    </div>
  );
}