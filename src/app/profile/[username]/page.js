export default function ProfilePage({ params }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Profile Page: {params.username}</h1>
      <p>This is the profile page for user: <strong>{params.username}</strong></p>
    </div>
  );
}
