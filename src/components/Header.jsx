import Logo from "../assets/images.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="log" src={Logo} alt="QUIZ" />
        <a href="/">Home</a>
        <nav>
          <div className="top">
            <a href="/Login" className="l">
              Login
            </a>
            <a href="SignUp" className="S">Sign Up</a>
            <input className="search-bar" type="text" placeholder="search" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
