import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  function handleLogin() {
    try {
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
      });
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup before completing sign-in.");
      } else {
        console.error(error);
      }
    }
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }

  //   try {
  //   const result = await signInWithPopup(auth, provider);
  //   // Proceed with user info
  // } catch (error) {

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
