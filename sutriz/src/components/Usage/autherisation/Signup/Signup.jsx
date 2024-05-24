import React, { useRef } from "react";
import styles from "./Signup.module.css";
import sutrizlogo from "../../../../assets/sutrizlogo.png";
import signimg from "./signinvector.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Google from "../google/google";
import { app } from "../../../../firebaseconfigfile";
import { Helmet } from "react-helmet";

function Signup() {
  const emailData = useRef("");
  const passwordData = useRef("");

  function handleSignup() {
    const email = emailData.current.value;
    const password = passwordData.current.value;

    if (email === "" || password === "") {
      alert("Please fill in email and password");
    } else {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("You have successfully created your account");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });

      emailData.current.value = "";
      passwordData.current.value = "";
    }
  }

  return (
    <>
      <Helmet>
        <title>Signup to Sutriz</title>
      </Helmet>
      <div className={styles.rootDiv}>
        <div style={{ display: "flex" }}>
          <img id={styles.logo} src={sutrizlogo} alt="sutriz logo" />
          <div
            style={{
              height: "60px",
              fontSize: "40px",
              lineHeight: "60px",
              textAlign: "center",
              width: "120px",
              color: "#FFD57F",
              fontWeight: "bold",
            }}
          >
            SUTRIZ
          </div>
        </div>

        <div id={styles.container}>
          <div style={{ minWidth: "450px" }}>
            <h1 style={{ fontSize: "40px" }}>Sign up</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                height: "200px",
              }}
            >
              <Google />
            </div>

            <div
              style={{
                height: "50px",
                width: "450px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              -----OR-----
            </div>

            <div style={{ width: "100%", justifyContent: "space-evenly" }}>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  border: "1px solid #e0dfdc",
                  justifyContent: "center",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <label htmlFor="email">Email</label>
                <input
                  ref={emailData}
                  style={{ width: "100%", border: "none" }}
                  placeholder="Enter your email..."
                  id="email"
                  type="email"
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  justifyContent: "center",
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid #e0dfdc",
                }}
              >
                <label htmlFor="password">Password</label>
                <input
                  ref={passwordData}
                  style={{ width: "100%", border: "none" }}
                  placeholder="Enter your password..."
                  id="password"
                  type="password"
                />
              </div>
              <button id={styles.Signup} onClick={handleSignup}>
                Sign up with Email
              </button>
            </div>
          </div>

          <img id={styles.imgbox} src={signimg} />
        </div>
      </div>
    </>
  );
}

export default Signup;
