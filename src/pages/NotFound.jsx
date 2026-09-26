import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-shell">
      <div className="status-box">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link className="btn btn-danger" to="/">Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
