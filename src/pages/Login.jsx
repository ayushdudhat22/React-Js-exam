import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authActions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  const [email, setEmail] = useState('student@example.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please enter email and password.');
      return;
    }

    dispatch(loginUser(email.trim()));
    navigate(location.state?.from || '/');
  };

  return (
    <div className="page-shell">
      <div className="form-panel mx-auto" style={{ maxWidth: 520 }}>
        <h1>Login</h1>
        <p className="text-secondary">Simple demo authentication for the practical project.</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="btn btn-danger w-100" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
