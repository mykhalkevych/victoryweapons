import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import About from '../pages/About';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
