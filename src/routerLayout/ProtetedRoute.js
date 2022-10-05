import { Link, Navigate, Outlet, useNavigate, useOutlet } from "react-router-dom";



export const ProtectedRoute = ({ children }) => {
  // const { user } = useAuth();
  const outlet = useOutlet();

  const navigate = useNavigate();
  //console.log(user)
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (

    <div>
      <nav>
        <Link to="/cart">ddd</Link>

      </nav>
      <Outlet />{outlet
      }   </div>

  );
};