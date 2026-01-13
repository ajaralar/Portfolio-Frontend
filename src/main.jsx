import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { techAboutLoader, techResumeLoader, techConnectLoader, techProjectsLoader, techFooterLoader, techHomeLoader } from './api/techLoaders.js'
import { homeLoader } from './api/lobbyLoaders.js'
import TechLayout from './routes/TechLayout/TechLayout.jsx'
import TechHome from './routes/TechHome/TechHome.jsx'
import TechAbout from './routes/TechAbout/TechAbout.jsx'
import TechResume from './routes/TechResume/TechResume.jsx'
import TechConnect from './routes/TechConnect/TechConnect.jsx'
import TechProjects from './routes/TechProjects/TechProjects.jsx'
import HomeLayout from './routes/HomeLayout/HomeLayout.jsx'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    loader: homeLoader
  },

  {
    path: '/tech',
    element: <TechLayout />,
    loader: techFooterLoader,
    children: [
      {
        index: true,
        loader: techHomeLoader,
        element: <TechHome />
      },
      {
        path: 'about',
        loader: techAboutLoader,
        element: <TechAbout />
      },
      {
        path: 'resume',
        loader: techResumeLoader,
        element: <TechResume />
      },
      {
        path: 'connect',
        loader: techConnectLoader,
        element: <TechConnect />
      },
      {
        path: 'projects',
        loader: techProjectsLoader,
        element: <TechProjects />
      }
    ]
  },

  {
    path: '/music'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
