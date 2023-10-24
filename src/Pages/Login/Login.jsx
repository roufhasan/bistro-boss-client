import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import authBgImg from "../../assets/others/authentication.png";
import authAvatar from "../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log(res.user);

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Welcome To Bistro Boss",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const hanldeCaptchaValidation = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url(${authBgImg})` }}
        className="min-h-screen grid place-items-center"
      >
        <div className="flex justify-center items-center shadow-3xl pt-14 pb-11 px-[3%]">
          <div className="w-1/2">
            <img src={authAvatar} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="text-[40px] text-center font-bold mb-5">Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-xl font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4 mb-6"
              />
              <label htmlFor="password" className="text-xl font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4"
              />
              <div className="mt-9">
                <LoadCanvasTemplate />
              </div>
              <input
                onBlur={hanldeCaptchaValidation}
                type="text"
                name="captcha"
                id="captcha"
                placeholder="Type above text"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4"
              />
              <input
                disabled={disabled || loading}
                type="submit"
                value="Sign in"
                className={`w-full bg-[#d1a054] ${
                  disabled || (loading && `bg-[#dbccb6]`)
                } bg-opacity-70 py-6 text-white text-xl font-bold mt-8 cursor-pointer`}
              />
            </form>
            <p className="text-[#D1A054] text-xl text-center font-medium mt-8">
              New here?{" "}
              <Link to="/signup" className="font-bold">
                Create a new Account
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
