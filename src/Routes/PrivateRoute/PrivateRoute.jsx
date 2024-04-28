import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <p className="text-center">
        <span className="loading loading-dots loading-lg"></span>
      </p>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
