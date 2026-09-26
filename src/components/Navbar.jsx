import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/authActions';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const favoritesCount = useSelector((state) => state.auth.favorites.length);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark cyro-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand brand-text" to="/">
          <span className="brand-dot">R</span>
          CYRO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#movieNav"
          aria-controls="movieNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="movieNav">
          <div className="navbar-nav me-auto">
            <NavLink className="nav-link" to="/">Latest</NavLink>
            <NavLink className="nav-link" to="/search">Search</NavLink>
            <NavLink className="nav-link" to="/favorites">Watchlist ({favoritesCount})</NavLink>
          </div>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <Link className="btn btn-sm btn-outline-light" to="/profile">{user.name}</Link>
                <button className="btn btn-sm btn-danger" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <Link className="btn btn-sm btn-light" to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
