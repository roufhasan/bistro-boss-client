import { Link, useNavigate } from "react-router-dom";
import authBgImg from "../../assets/others/authentication.png";
import authAvatar from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, loading, setLoading, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Yeaaa.. Sign Up Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <section
        style={{ backgroundImage: `url(${authBgImg})` }}
        className="min-h-screen grid place-items-center"
      >
        <div className="flex justify-center items-center shadow-3xl pt-14 pb-11 px-[3%]">
          <div className="w-1/2">
            <h1 className="text-[40px] text-center font-bold mb-5">Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <label htmlFor="name" className="text-xl font-semibold">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                id="name"
                placeholder="Type your name"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4 mb-6"
              />
              <label htmlFor="photoURL" className="text-xl font-semibold">
                Photo URL
              </label>
              <input
                {...register("photoURL")}
                type="url"
                name="photoURL"
                id="photoURL"
                placeholder="Type your photoURL"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4 mb-6"
              />
              <label htmlFor="email" className="text-xl font-semibold">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4 mb-6"
              />
              <label htmlFor="email" className="text-xl font-semibold">
                Password
              </label>
              <input
                {...register("password", {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                required
                className="py-[27px] pl-[30px] w-full border border-[#D0D0D0] rounded-lg mt-4"
              />
              {errors.password?.type === "pattern" && (
                <p className="mt-2 text-red-500 text-sm">
                  Password must contain min 8 characters, one letter & number *
                </p>
              )}
              <input
                disabled={loading}
                type="submit"
                value="Sign Up"
                className={`w-full bg-[#d1a054] ${
                  loading && "bg-[#dbccb6]"
                } bg-opacity-70 py-6 text-white text-xl font-bold mt-8 cursor-pointer `}
              />
            </form>
            <p className="text-[#D1A054] text-xl text-center font-medium mt-8">
              Already registered?{" "}
              <Link to="/login" className="font-bold">
                Go to log in
              </Link>
            </p>
            <SocialLogin />
          </div>
          <div className="w-1/2">
            <img src={authAvatar} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
