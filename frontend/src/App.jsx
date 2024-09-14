import "./App.css";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/modules/HomePage/screens/Home.jsx";
import { Router, Routes, Route } from "react-router-dom";
import ShopHome from "@/modules/Shop/screens/ShopHome.jsx";
function App() {
  return (
    <>
      <Layout>
        {/*<Router>*/}
        {/*  <Routes>*/}
        {/*    <Route path="/" component={Home} />*/}
        {/*    <Route path="/shop" component={ShopHome} />*/}
        {/*  </Routes>*/}
        {/*</Router>*/}
        <Home />
      </Layout>
    </>
  );
}

export default App;
