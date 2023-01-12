import React, { useContext } from "react";
import { setAuthToken } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <p className="text-center">
        <small>Social Login</small>
      </p>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
