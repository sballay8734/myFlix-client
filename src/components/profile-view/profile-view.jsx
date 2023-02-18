import { UserInfo } from './profile-view/user-info';
import { FavoriteMovies } from './favorite-movies';

export const ProfileView = () => {
  return (
    <div>
      <UserInfo name={user.username} email={user.email} />
    </div>
  )
}