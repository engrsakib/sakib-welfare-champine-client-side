import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.congig";

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

  //Register by email and password
  const crateMailPassword = (mail, password) => {
    return  createUserWithEmailAndPassword(auth, mail, password);
  };
  const authInfo = {
    setdark,
    dark,
    setUser,
    user,
    crateMailPassword,
    loadding,
    setLoadding,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
