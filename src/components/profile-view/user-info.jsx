export const UserInfo = ({ user }) => {
  return (
    <div className="profile-info">
      <h1>ProfileView of {user.username}</h1>
      <div>Email: {user.email}</div>
      <div>Favorite Movies: {user.favoriteMovies}</div>
    </div>
  )
}