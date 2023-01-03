import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Greeting />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
