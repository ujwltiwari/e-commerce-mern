import Footer from "@/components/layout/Footer.jsx";
import Header from "@/components/layout/Header.jsx";

const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <div className={className ?? ""}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
