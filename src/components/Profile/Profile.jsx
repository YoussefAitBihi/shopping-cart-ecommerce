import ProfileAvatar from "../../assets/image-avatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <button className="profile__button">
        <img
          src={ProfileAvatar}
          alt="Profile avatar"
          className="profile__avatar"
        />
      </button>
    </div>
  );
};

export default Profile;
