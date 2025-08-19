export default function BlogPage({ params }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blog Post ID: {params.id}</h1>
      <p>This is the blog post with ID: <strong>{params.id}</strong></p>
    </div>
  );
}
