import { Link } from "react-router-dom";
import errorImage from "../../assets/images/errors.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-5 lg:px-0 flex justify-center py-20">
      <div className=" flex flex-col md:flex-row lg:flex-row gap-10 items-center">
        <div className="">
          <img
            className="max-h-[300px] w-full rounded-lg "
            src={errorImage}
            alt=""
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl lg:text-3xl mb-5">Something Went Wrong!</h2>
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
