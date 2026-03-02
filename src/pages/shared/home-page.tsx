import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Creche Fácil</h1>
      <p>Find and apply to daycare institutions online</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/search" style={{ margin: '0 1rem' }}>
          Search Institutions
        </Link>
        <Link to="/login" style={{ margin: '0 1rem' }}>
          Login
        </Link>
      </div>
    </div>
  );
}
