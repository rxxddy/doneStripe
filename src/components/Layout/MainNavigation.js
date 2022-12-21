import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";
import "./MainNavigation.css";

const MainNavigation = () => {
  const { isLoggedIn , logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">React Authentication</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
