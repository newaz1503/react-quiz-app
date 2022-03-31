import { Link } from "react-router-dom";
import Classes from "../styles/Navbar.module.css";
import Account from "./Account";
function Navbar() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <Link to="/" className={Classes.brand}>
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Navbar;
