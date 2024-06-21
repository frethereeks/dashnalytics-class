import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
<<<<<<< HEAD
import Wallet from './pages/Wallet'
=======
import ErrorPage from './pages/ErrorPage'
>>>>>>> 344da8ea75d0098232be7d4ce51849bad9ccc75e


export default function App() {

  const PageLayout = () => {
    return <>
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4 relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  }

  const routerPages = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/products",
          element: <Products />
        },
<<<<<<< HEAD
        {
          path: "/wallet",
          element: <Wallet />
        },
      ]
=======
      ],
      errorElement: <ErrorPage />
>>>>>>> 344da8ea75d0098232be7d4ce51849bad9ccc75e
    }
  ])

  return (
    <main className='bg-primary flex'>
      <RouterProvider router={routerPages}></RouterProvider>
    </main>
  )
}
