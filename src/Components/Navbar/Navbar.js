import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import { RiMenu4Fill, RiUserHeartLine } from "react-icons/ri";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <nav>
        <div className="logo-container">
          <RiUserHeartLine className="icon"></RiUserHeartLine>
          <h2>
            <Link to="/" className="header-title">
              Navbar Logo
            </Link>
          </h2>
        </div>
        <div className="link-container">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <RiMenu4Fill className="nav-bar-icon"></RiMenu4Fill>
          </label>
          <ul className="navbar-items">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              About
            </NavLink>
            {currentUser?.email ? (
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
            {
            currentUser?.reloadUserInfo?.photoUrl ? (
              <NavLink to="/">
                <img
                  src={currentUser?.reloadUserInfo?.photoUrl}
                  alt=""
                  className="profile-pic"
                />
              </NavLink>
            ) : (
              <span></span>
            )
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
