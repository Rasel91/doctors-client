
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Appointment from "../Pages/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import Footer from "../Pages/Shared/Footer";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/home',
                        element: <Home></Home>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/appointment',
                        element: <Appointment></Appointment>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/review',
                        element: <Review></Review>
                  },
                  {
                        path: '/footer',
                        element: <Footer></Footer>
                  }
                  
                  
            ]
      }



])

export default router;