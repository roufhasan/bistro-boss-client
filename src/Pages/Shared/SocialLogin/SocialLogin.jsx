import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedInUser = res.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="mt-6 text-[#444] text-center">
      <p className="text-xl font-medium mb-4">Or sign in with</p>
      <button
        onClick={handleGoogleSignIn}
        className="border-2 border-[#444] p-4 rounded-full"
      >
        <FaGoogle size={24} />
      </button>
    </div>
  );
};

export default SocialLogin;
