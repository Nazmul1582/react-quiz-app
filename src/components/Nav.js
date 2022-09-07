import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>React Quiz App</h3>
          </Link>
        </li>
      </ul>
        <div className="account">
            <span className="material-icons-outlined" title="Account"> account_circle</span>
            <Link to="/signup">Signup</Link>
            <span className="material-icons-outlined" title="Logout"> logout </span>
        </div>
    </nav>
  );
}
