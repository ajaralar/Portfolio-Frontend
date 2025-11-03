import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TechLayout from './routes/TechLayout/TechLayout.jsx'
import TechHome from './routes/TechHome/TechHome.jsx'
import TechAbout from './routes/TechAbout/TechAbout.jsx'
import TechResume from './routes/TechResume/TechResume.jsx'
import TechConnect from './routes/TechConnect/TechConnect.jsx'
import TechProjects from './routes/TechProjects/TechProjects.jsx'
import App from './routes/App.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/tech', element: <TechLayout />, children: [
      { index: true, element: <TechHome /> },
      { path: 'about', element: <TechAbout /> },
      { path: 'resume', element: <TechResume /> },
      { path: 'connect', element: <TechConnect /> },
      { path: 'projects', element: <TechProjects /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
