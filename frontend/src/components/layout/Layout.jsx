import Footer from "@/components/layout/Footer.jsx";
import Header from "@/components/layout/Header.jsx";

const Layout = ({ children }) => {
  return (
      <>
       <Header />
        {children}
        <Footer />
      </>
  )
}

export default Layout