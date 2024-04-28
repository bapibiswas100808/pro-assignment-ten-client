import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
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
    console.log(name, email, photo, password);
    // Create user in firebase
    createUser(email, password)
      .then((user) => {
        console.log(user);
        toast.success("Successfully registered!");
        navigate("/");
        updateUser(name, photo)
          .then(() => {})
          .catch(() => {});
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto py-5">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <p className="py-6">
              Register with ZUWoody Art to unlock exclusive benefits and stay
              updated on our latest collections, promotions, and events. Join
              our community today and embark on a journey of artisanal
              discovery.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
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
                  Register Now!
                </button>
              </div>
            </form>
            <p className="pl-8">Already Have an Account?</p>
            <p className="pl-8 pb-5">
              Please
              <Link to="/login" className="text-blue-700 underline ml-2">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
