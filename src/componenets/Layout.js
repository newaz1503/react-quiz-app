import { Outlet } from "react-router-dom";
import Classes from "../styles/MasterLayout.module.css";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={Classes.main}>
        <div className={Classes.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
