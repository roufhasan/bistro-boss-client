import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import authBgImg from "../../assets/others/authentication.png";
import authAvatar from "../../assets/others/authentication2.png";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <section
      style={{ backgroundImage: `url(${authBgImg})` }}
      className="min-h-screen grid place-items-center"
    >
      <div className="flex justify-center items-center shadow-3xl pt-14 pb-11 px-[3%]">
        <div>
          <img src={authAvatar} alt="" />
        </div>
        <div>
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
              type="text"
              name="captcha"
              id="captcha"
              placeholder="Type above text"
              required
              className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4"
            />
            <input
              type="submit"
              value="Sign in"
              className="w-full bg-[#d1a054] bg-opacity-70 py-6 text-white text-xl font-bold mt-8 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
