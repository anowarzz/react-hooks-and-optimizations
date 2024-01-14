const UserAvatar = ({ imageUrl }) => {
  return (
    <div>
      <img className="w-24 rounded-full" src={imageUrl} alt="userImage" />
    </div>
  );
};

export default UserAvatar;
