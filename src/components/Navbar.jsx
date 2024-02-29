import Logo from "../assets/images.png";
import "../styles/navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <header className="header">
        <img
          className="log"
          src={Logo}
          alt="QUIZ"
          onClick={() => {
            props.setShowLogin(false);
            props.setShowSignUp(false);
            props.setQuizIsStarted(false);
          }}
        />
        <div className="ctt">
          <h4 className="lop"
            onClick={() => {
              props.setShowLogin(true);
              props.setShowSignUp(false);
              props.setQuizIsStarted(false);
            }}
          >
            Login
          </h4>
          <h4 className="sig"
            onClick={() => {
              props.setShowLogin(false);
              props.setShowSignUp(true);
              props.setQuizIsStarted(false);
            }}
          >
            Sign Up
          </h4>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
