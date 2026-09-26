import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.auth.favorites);

  return (
    <div className="page-shell">
      <div className="profile-panel mx-auto" style={{ maxWidth: 700 }}>
        <h1>Profile</h1>
        <p className="mb-1"><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <hr />
        <p className="mb-0"><strong>Watchlist Movies:</strong> {favorites.length}</p>
      </div>
    </div>
  );
}

export default Profile;
