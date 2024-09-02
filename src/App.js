import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./component/page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import { useContext } from "react";
import ThemeContexttt from "./context/DataContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
]);

function App() {
  const {theme} = useContext(ThemeContexttt);
  return (
    <div className={`AppTheme ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
