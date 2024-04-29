import { Link } from "react-router-dom";
import errorImage from "../../assets/images/errors.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5 lg:px-0">
      <div className="py-10 flex flex-col md:flex-row lg:flex-row gap-10">
        <div className="">
          <img className="max-h-[300px] w-full" src={errorImage} alt="" />
        </div>
        <div>
          <h2 className="text-3xl mb-5">Something Went Wrong!</h2>
          <Link
            className="bg-[#8b4513] px-3 py-2 cursor-pointer mt-5 rounded-lg"
            to="/"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
