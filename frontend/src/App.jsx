import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useLocation } from "react-router-dom";
import "./App.css"
function App() {
  const { authUser } = useAuthContext();
const location = useLocation(); // Get the current route information
const isHome = location.pathname === "/";
  return (
    <div
      className={`p-4 h-screen flex items-center justify-center overflow-auto ${
        !isHome ? "sm:4-[400px]" : ""
      }`}
    >
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
          className="sm:4-[400px]"
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
