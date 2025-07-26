import './App.css';
import AllTask from "./AllTask.jsx";
import Home from './Task1/Home.jsx';
import About from './Task1/About.jsx';
import Contact from './Task1/Contact.jsx';
import DashBoard from './Task2/DashBoard.jsx';
import Profile from './Task2/DashBoard/Profile.jsx';
import Settings from './Task2/DashBoard/Settings.jsx';
import Users from './Task3/Users.jsx';
import DashboardTask4 from './Task4/DashboardTask4.jsx';
import Login from './Task4/Login.jsx';
import AuthWrapper from './Task4/AuthWrapper.jsx';
import AuthWrapperTask5 from './Task5/AuthWrapper.jsx';
import {AuthProvider} from './Task4/AuthContext.jsx';
import Task5 from './Task5/Task5.jsx';
import DashBoardTask5 from './Task5/DashboardTask5.jsx';
import LoginTask5 from './Task5/LoginTask5.jsx';
import Hometask6 from './Task6/HomeTask6.jsx';
import ContactTask6 from './Task6/Contact.jsx';
import AboutTask6 from './Task6/AboutTask6.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path:'/',
    element:<AllTask/>,
    errorElement:<NotFoundPage/>,
    children:[
      { path: "/NavBarTask6/ContactTask6", 
        element: <ContactTask6 /> 
      },
      { path: "/NavBarTask6/HomeTask6", 
        element: <Hometask6 /> 
      },
      { path: "/NavBarTask6/AboutTask6", 
        element: <AboutTask6 />
      }
      ,
    ]
  },
  {
    path:'/Task1/Home',
    element:<Home/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/Task1/About',
    element:<About/>
  },
   {
    path:'/Task1/Contact',
    element:<Contact/>
  },
  {
    path:"/Task2/DashBoard",
    element:<DashBoard/>,
    children:[
      {
         path:'/Task2/DashBoard/Profile',
         element:<Profile/>
      },
      {
         path:'/Task2/DashBoard/Settings',
         element:<Settings/>
      },
    ]
  },  
  {
        path:"/Task3/Users",
        element:<Users/>,
  },
  {
       path:"/Task3/Users/:userId",
        element:<Users/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthWrapper>
        <DashboardTask4 />
      </AuthWrapper>
    ),
  },

  {
    path:"/Task5",
    element:<Task5/>,
  },{
    path:"/Task5/DashBoardTask5",
    element: (
      <AuthWrapperTask5>
        <DashBoardTask5/>
      </AuthWrapperTask5>)
  },{
    path:"/Task5/LoginTask5",
    element:<LoginTask5/>
  },
  // {
  //   path:"*",
  //   element:<NotFoundPage/>
  // }
])

function App() {
  return (
    <div className="App">
      <AuthProvider> 
        <RouterProvider router={router} />
      </AuthProvider>
      
    </div>
  );
}

export default App;
