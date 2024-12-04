import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.congig";
import Loading from "../components/Loading";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //theme control
  const [dark, setdark] = useState(false);
  useEffect(() => {
    if (dark) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "night");
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
    }
  }, [dark]);

  // user setup
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);
  console.log(user?.email);

  // observerd
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (Currentuser) => {
      setUser(Currentuser);
      setTimeout(() => {
        setLoadding(false);
      }, 200);
      if (Currentuser?.email) {
        fetch(`http://localhost:5000/users/${Currentuser?.email}`)
          .then((res) => res.json())
          .then((data) => setUser(data[0]));
      }
    });

    return () => {
      subscribe();
    };
  }, []);

  console.log(user);
  // loading
  if (loadding) {
    return <Loading></Loading>;
  }

  //Register by email and password
  const crateMailPassword = (mail, password) => {
    return createUserWithEmailAndPassword(auth, mail, password);
  };

  // logIn mail and password
  const logInMail = (mail, password) => {
    return signInWithEmailAndPassword(auth, mail, password);
  };
  const authInfo = {
    setdark,
    dark,
    setUser,
    user,
    logInMail,
    crateMailPassword,
    loadding,
    setLoadding,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
