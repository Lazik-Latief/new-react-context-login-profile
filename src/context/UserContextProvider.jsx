import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // 👇 array for multiple users
  const [users, setUsers] = useState([]);

  const addUser = (username, password) => {
    if (!username || !password) return;

    // optional: limit to 3 users
    if (users.length >= 3) return;

    setUsers((prev) => [...prev, { username, password }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;