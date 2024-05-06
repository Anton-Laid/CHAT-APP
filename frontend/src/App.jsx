import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/index.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className=" h-screen flex items-center justify-center p-0">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;