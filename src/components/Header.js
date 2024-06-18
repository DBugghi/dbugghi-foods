import { useState, useEffect } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  useEffect(() => {

  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={require("/assets/Adobe_Post_DBugghi.png")}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
