import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
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
            <form className="card-body">
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
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#8B4513] hover:bg-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="pl-8 pb-5 space-y-2">
              <p className="flex items-center gap-4">
                <span> Login With Google:</span>
                <span className="cursor-pointer">
                  <FaGoogle />
                </span>
              </p>
              <p className="flex items-center gap-4">
                <span> Login With Github:</span>
                <span className="cursor-pointer">
                  <FaGithub />
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
