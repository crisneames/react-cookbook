import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <img
            className="navPic"
            src="data:image/png;base64,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"
            alt="cookbook"
          />
          <h1 className="left">Cookbook</h1>
        </Link>
        <Link className="login" to="/login">
          Login
        </Link>

        <Link className="logout" to="/logout">
          Logout
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};
