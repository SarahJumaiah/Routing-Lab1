import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Info from '../pages/Info.jsx';
import Register from '../pages/Register.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/info',
    element: <Info />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
