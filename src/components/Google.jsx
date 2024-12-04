import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Firebase/firebase.congig";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Google = () => {
  const { setUser, setLoadding, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    // Add your Google login functionality here
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const users = result.user;
        setUser(users);
        // console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        const name = users?.displayName;
        const photo = users?.photoURL;
        const mail = users?.email;
        const newUser = {
          name,
          mail,
          photo,
          crateDate: users?.metadata?.creationTime,
          lastSignInDate: users?.metadata?.lastSignInTime,
        };
        if (user.mail != users.email) {
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(newUser);
              setUser(newUser);
              Swal.fire("User create successfullya and LogIn!");
              setLoadding(true);
              setTimeout(() => {
                setLoadding(false);
              }, 2000);
              navigate("/");
            });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
        Swal.fire("User LogIn successfullya!");
        navigate("/");
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
