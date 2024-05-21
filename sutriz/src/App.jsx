import React, { useEffect, useState, useContext } from "react";
import styles from "./App.module.css";
import { getAuth } from "firebase/auth";
import ProfileContext from "./Context";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const navigate=useNavigate();
  const { updateData } = useContext(ProfileContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const auth = getAuth();

    // If user is not authenticated, and whenever user try to login using signup by email or signup by google or if user got LOGOUT or PAGE REFRESH, the below code will run.
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        let userName = user.displayName;
        let userPhotoUrl = user.photoURL;
        updateData({ userPhotoUrl, userName });
      }
      else{
        navigate("/");
      }
    });
  }, [user]);


  return (
    <div className={styles.rootDiv}>
      <Outlet/>
      <ToastContainer/>
    </div>
  );
}

export default App;
