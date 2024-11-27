import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <section>
      {/* header rummer os navbar */}
      <Header/>

      <main>
        <Outlet/>
      </main>


    <Footer/>
    </section>
  )
}

export default Layout