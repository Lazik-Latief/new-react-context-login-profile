import "./App.css";
import UserProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    // 👇 Context Provider wraps components that need shared data
    <UserProvider>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
