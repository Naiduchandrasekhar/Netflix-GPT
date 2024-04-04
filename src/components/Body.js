import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import TrailerVideo from "./TrailerVideo"
import Header from "./Header"

const Body = () => {

    const AppLayout = () => {
      return (
        <div>
            <Header />
            <Outlet />
        </div>
      )
    }

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/browse",
                    element: <Browse />
                },
                {
                    path: "/browse/:id",
                    element: <TrailerVideo />
                }
            ]
        }
    ])

    

    return (
      <div>
          <RouterProvider router={appRouter} />
      </div>
    )
  }
  
  export default Body