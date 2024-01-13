const UserAvatar = ({ imageUrl }) => {
  return (
    <div>
      <img className="w-32 rounded-full" src={imageUrl} alt="userImage" />
    </div>
  );
};

export default UserAvatar;
