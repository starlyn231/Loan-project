import { Link, Navigate, Outlet, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const outlet = useOutlet();
  //console.log(user)
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (

    <div>
      <nav>
        <Link to="/mydesk">Settings</Link>

      </nav>
      <Outlet />{outlet
      }   </div>

  );
};