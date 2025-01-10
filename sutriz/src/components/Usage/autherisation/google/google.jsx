import React, { useContext } from "react";
import styles from "./google.module.css";
import googlelogo from "./google-icon.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();

  function handleSignup() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user=result.user;
        const token=user.accessToken
        localStorage.setItem("token",token)
        navigate("/usage/workingsection");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <button onClick={handleSignup} className={styles.otherMethods}>
      <img
        style={{ height: "20px", width: "20px" }}
        src={googlelogo}
        alt="Google logo"
      />
      Continue with Google
    </button>
  );
}

export default Google;
