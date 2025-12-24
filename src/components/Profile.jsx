
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  // 👇 CHANGED: user → users array
  const { users } = useContext(UserContext);

  // if no users logged in
  if (users.length === 0) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-card">
      <h2 className="profile-title">Profiles</h2>

      {/* 👇 LOOP through all users */}
      {users.map((user, index) => (
        <div key={index} className="profile-text">
          <p>
            <span className="profile-label">Username:</span> {user.username}
          </p>

          <p>
            <span className="profile-label">Password:</span> {user.password}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Profile;
