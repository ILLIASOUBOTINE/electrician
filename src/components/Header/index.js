import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/reducers/userSlice";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(deleteUser());
  };

  const getProfile = () => {
    if (user) {
      redirect("/profile");
    } else {
      redirect("/login");
    }
  };

  return (
    <div className={styles.header}>
      <h2>
        <Link to={"/"}>Logo</Link>
      </h2>
      <div className={styles.link}>
        <p onClick={getProfile}>
          <i className={`ri-shield-user-line `}></i>
          {user && <span className={styles.span}>{user.name}</span>}
        </p>
        {user && (
          <i
            onClick={logout}
            className={`ri-logout-box-r-line ${styles.logout}`}
          ></i>
        )}
      </div>
    </div>
  );
}

export default Header;
