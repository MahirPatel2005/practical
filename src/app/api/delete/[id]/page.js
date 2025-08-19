'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function DeletePage() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => setResponse(data));
    }
  }, [id]);

  return (
    <div>
      <h1>/delete/{id} – DELETE Request</h1>
      <pre>{response ? JSON.stringify(response, null, 2) : 'Deleting...'}</pre>
    </div>
  );
}