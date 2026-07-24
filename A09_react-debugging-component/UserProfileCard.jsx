import { useState } from "react";

const userData = {
  name: "Karl Ashton L. Mahusay",
  avatarUrl: "https://github.com/itooonn.png",
  bio: "BSIS 3 Student",
  skills: ["HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState();

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  return (
    <div className="profile-card">
      <img
      src={userData.avatarUrl}
      style={{
        width: "250px",
        height: "250px",
      }}
      />

      <h2>{userData.name}</h2>

      <label htmlFor="bio">Bio</label>
      <p id="bio">{userData.bio}</p>

      <h3>Skills</h3>
      <ul>
        {userData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div style={{ color: "blue", fontWeight: "bold" }}>
        Messages sent: {messageCount}
      </div>

      {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

      <button style={{ margin: "4px" }} onClick={handleSendMessage}>
        Send Message
      </button>
      <button style={{ margin: "4px" }} onClick={handleReset}>
        Reset
      </button>

      {userData.isOnline && (
        <button style={{ margin: "4px" }} onClick={handleToggleFavorite}>
          {isFavorited ? "☆ Favorite" : "★ Favorited"}
        </button>
      )}

      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </div>
  );
}

export default UserProfileCard;