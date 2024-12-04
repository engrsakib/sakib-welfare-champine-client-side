import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Firebase/firebase.congig";
import { AuthContext } from "../provider/AuthProvider";

const Google = () => {
    const { setUser } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    // Add your Google login functionality here
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        toast.success("singIN successfully");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
        toast.error("Some thing went wrong");
      });
  };
  return (
    <div className="flex justify-center mt-4">
      <button
        className="btn bg-red-300 hover:bg-red-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-xl" /> {/* Google icon */}
        Login with Google
      </button>
    </div>
  );
};

export default Google;
