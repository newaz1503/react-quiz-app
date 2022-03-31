import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Classes from "../styles/Account.module.css";
function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={Classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/Signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Account;
