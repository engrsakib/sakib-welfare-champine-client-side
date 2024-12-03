import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //theme control
  const [dark, setdark] = useState(false);
  useEffect(()=>{
    if(dark){
        document
          .getElementsByTagName("html")[0]
          .setAttribute("data-theme", "night");
    }
    else{
        document
          .getElementsByTagName("html")[0]
          .setAttribute("data-theme", "light");
    }
  },[dark])


  const authInfo = {
    setdark,
    dark,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;