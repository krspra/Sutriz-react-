import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import styles from "./Logout.module.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Logout = () => {
  const [settingCheck, setsettingCheck] = useState(false);
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
      <input style={{ display: "none" }} id="settingCheckBox" type="checkbox" />
      <label htmlFor="settingCheckBox">
        <IoSettingsOutline
          onClick={() => {
            setsettingCheck(!settingCheck);
          }}
          id={styles.setting}
        />
      </label>

      <div id={settingCheck?styles.settingDivActive:styles.settingDivUnActive}>
        <a
          href="/"
          className={styles.settingOption} //using Link and useNavigate didn't work here..so we use anchor tag...because anchor tag reload the page but Link don't reload it...still think how to do without reloading page.
          onClick={() => {
            setsettingCheck(false);
            handleLogOut();
          }}
        >
          <RiLogoutCircleRLine />
          Logout
        </a>
        <div onClick={()=>{setsettingCheck(false)}} className={styles.settingOption}>
          <MdDarkMode  />
          Dark Mode
        </div>
      </div>

      <a href="/" id={styles.logout} onClick={handleLogOut}>
        <RiLogoutCircleRLine /> Logout
      </a>
    </>
  );
};
//using Link didn't work here..so we use anchor tag...because anchor tag reload the page but Link don't reload it...still think how to do without reloading page.
export default Logout;
