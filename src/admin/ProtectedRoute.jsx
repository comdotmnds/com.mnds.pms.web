import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route>
      {...rest}
      element = {isAuthenticated ? element : <Navigate to="/login" replace />}
    </Route>
  );
};
export default ProtectedRoute;
