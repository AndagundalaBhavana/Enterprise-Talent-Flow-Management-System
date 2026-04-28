import { useNavigate } from "react-router-dom";
import "./Profile.css";

const ProfileMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h1 className="profile-title">👤 Profile Section</h1>

      <div className="profile-grid">
        <div
          className="profile-card"
          onClick={() => navigate("/profile/view")}
        >
          <h2>👀 View Profile</h2>
          <p>See your details</p>
        </div>

        <div
          className="profile-card"
          onClick={() => navigate("/profile/update")}
        >
          <h2>✏️ Update Profile</h2>
          <p>Edit your details</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;