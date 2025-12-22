import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { aboutLoader, resumeLoader, connectLoader, projectsLoader, footerLoader, homeLoader } from './api/techLoaders.js'
import TechLayout from './routes/TechLayout/TechLayout.jsx'
import TechHome from './routes/TechHome/TechHome.jsx'
import TechAbout from './routes/TechAbout/TechAbout.jsx'
import TechResume from './routes/TechResume/TechResume.jsx'
import TechConnect from './routes/TechConnect/TechConnect.jsx'
import TechProjects from './routes/TechProjects/TechProjects.jsx'
import App from './routes/App.jsx'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/tech',
    element: <TechLayout />,
    loader: footerLoader,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <TechHome />
      },
      {
        path: 'about',
        loader: aboutLoader,
        element: <TechAbout />
      },
      {
        path: 'resume',
        loader: resumeLoader,
        element: <TechResume />
      },
      {
        path: 'connect',
        loader: connectLoader,
        element: <TechConnect />
      },
      {
        path: 'projects',
        loader: projectsLoader,
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
