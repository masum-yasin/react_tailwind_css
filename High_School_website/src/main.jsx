import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import CoursesDetails from './Pages/CoursesDetails.jsx'
import Contacts from './Pages/Contacts.jsx'
import Blogs from './Pages/Blogs.jsx'
import Login from './Pages/Login/Login.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import PrivateRoute from './Component/PrivateRoute.jsx'
import Secret from './Component/Secret/Secret.jsx'


const router = createBrowserRouter([
      {
        path:'/',
        element:<App></App>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'about',
            element:<About/>
          },
          
          {
            path:'coursedetails',
            element:<CoursesDetails></CoursesDetails>
          },
          {
            path:'course',
            element:<Courses></Courses>
          },
          {
            path:'contact',
            element:<Contacts></Contacts>
          },
          {
            path:'blog',
            element:<Blogs></Blogs>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<Signup></Signup>
          },
          {
            path:'/secret',
            element:<PrivateRoute><Secret></Secret></PrivateRoute>
          }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
