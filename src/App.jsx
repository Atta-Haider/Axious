import { createBrowserRouter, RouterProvider } from "react-router";
import { WebLayout } from "./components/Layout/WebLayout";
import { Movies } from "./components/Pages/Movies";
import { Home } from "./components/Pages/Home";
import { Error } from "./components/Pages/Error";
import { Contact, ContactData } from "./components/Pages/Contact";
import { About } from "./components/Pages/About";
import { getMovies } from "./Services/services";
import { CardDetails } from "./components/Pages/cardDetails";

const App = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebLayout/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>

        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path: "/movies",
          element: <Movies/>,
          loader: getMovies
        },
        {
          path: "/movies/:movieId",
          element: <CardDetails/>,
        },
        {path:"/contact",
          element: <Contact/>,
          action: ContactData,
        }
      ]
    }
  ])
  return (<>
    <RouterProvider router={router}/>
  </>)
}
export default App;