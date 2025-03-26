import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  if (!cookies.access_token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};
export default PrivateRoute;