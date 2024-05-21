import React from "react";
import { getAuth } from "firebase/auth";
import styles from "./Logout.module.css";

const Logout = () => {

  function handleLogOut() {
    const auth = getAuth();
    auth.signOut().then(() => {
      localStorage.removeItem("token");
    }).catch(error => {
      // Handle any errors here if necessary
      alert("Error signing out:", error);
    });
  }

  return (
    <a href="/" id={styles.logout} onClick={handleLogOut}> 
      Logout
    </a>
  );
};
//using Link didn't work here..so we use anchor tag...because anchor tag reload the page but Link don't reload it...still think how to do without reloading page.
export default Logout;
