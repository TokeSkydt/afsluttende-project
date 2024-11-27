/* react router */
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


/* pages */
import ViborgHaveservice1 from './pages/ViborgHaveservice1'
import ViborgHaveservice2 from "./pages/ViborgHaveservice2"
import Vejret from "./pages/Vejret"
import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound'
import Layout from './layout/Layout'
import Energidata from './pages/Energidata'
import Opgave4 from './pages/Opgave4'

//css
import './App.css'


function App() {

  const router = createBrowserRouter(
    [

      {
        path:"/",
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [

          
          {
          index: true, element: <Home/>
          },
          {
          path:"/viborghaveservice1", element: <ViborgHaveservice1/>
          },
         {
          path:"/viborghaveservice2", element: <ViborgHaveservice2/>
         },
         {
          path:"/vejret", element: <Vejret/>
          },
         {
          path:"/energidata", element: <Energidata/>
          },
         {
          path:"/opgave4", element: <Opgave4/>
          },
         {
          path:"*", element: <PageNotFound/>
        }
      ]
    }
    ]
  )

  return (
    <section>
      <RouterProvider router= { router}/>
    </section>
  )
}

export default App
