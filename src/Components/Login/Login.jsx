import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Password Should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password Must Have an UpperCase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password Must Have an LowerCase letter");
      return;
    }
    console.log(email, password);
    // Sign in Firebase
    signIn(email, password)
      .then((user) => {
        console.log(user);
        e.target.reset();
        toast.success("Successfully Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Logged In!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Logged In!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <p className="py-6">
              Access your personalized ZUWoody Art account to manage your
              orders, track shipments, and explore member-exclusive offers.
              Login today to elevate your shopping experience and discover
              artisanal treasures with ease.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    className="cursor-pointer relative top-10 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-[#8B4513] hover:bg-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="pl-8 pb-5 space-y-2">
              <p className="flex items-center gap-4">
                <span> Login With Google:</span>
                <span className="cursor-pointer">
                  <FaGoogle onClick={handleGoogleSignIn} />
                </span>
              </p>
              <p className="flex items-center gap-4">
                <span> Login With Github:</span>
                <span className="cursor-pointer">
                  <FaGithub onClick={handleGithubSignIn} />
                </span>
              </p>

              <p>Do not have an account?</p>
              <p>
                Please
                <Link className="text-blue-700 underline ml-2" to="/register">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
