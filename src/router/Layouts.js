
import PrivateLayout from '../Layout/private/PrivateLayout';
import PublicLayout from '../Layout/public/PublicLayout';
import { Navigate } from 'react-router-dom';
const routes = [
  {
    path: '/public',
    element: PublicLayout,
  },
  {
    path: '/private',
    element: PrivateLayout,
  },
  {
    path: '/',
    element: () => <Navigate to="/public" replace />,
  },
];

export default routes;