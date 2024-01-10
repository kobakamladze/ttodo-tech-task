import { Outlet } from "react-router-dom";

import Header from "../components/header.component";
import Footer from "../components/footer.copmonent";

const Layout = () => {
  return (
    <div className="App min-h-[100vh] flex flex-col font-mono">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
