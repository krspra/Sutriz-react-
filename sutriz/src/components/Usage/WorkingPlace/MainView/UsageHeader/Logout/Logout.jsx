import React from "react";
import { getAuth } from "firebase/auth";
import styles from "./Logout.module.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Logout = () => {
  function handleLogOut() {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        // Handle any errors here if necessary
        alert("Error signing out:", error);
      });
  }

  return (
    <>
      <FiMenu id={styles.menu}/>
      <a href="/" id={styles.logout} onClick={handleLogOut}>
        <RiLogoutCircleRLine /> Logout
      </a>
    </>
  );
};
//using Link didn't work here..so we use anchor tag...because anchor tag reload the page but Link don't reload it...still think how to do without reloading page.
export default Logout;
