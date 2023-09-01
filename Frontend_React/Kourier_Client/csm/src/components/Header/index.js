import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/3.png";
const Header = () => {
  console.log(sessionStorage.loginStatus);

  let isLoggedIn = sessionStorage.loginStatus == 1;
  const role = sessionStorage.role;
  console.log(role);

  console.log("isLoggedIn = " + isLoggedIn);

  const navigate = useNavigate();

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    // sessionStorage.removeItem("role");
    sessionStorage.removeItem("loginStatus");
  };
  const value = isLoggedIn
    ? role === "User"
      ? "/userHome"
      : role === "Admin"
      ? "/adminHome"
      : "/agentHome"
    : "/home";
  console.log(value);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></img>
          <Link to="/home" className="navbar-brand">
          Kourier
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={
                    isLoggedIn
                      ? role === "User"
                        ? "/userHome"
                        : role === "Admin"
                        ? "/adminHome"
                        : "/agentHome"
                      : "/home"
                  }
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/track" className="nav-link active">
                  Track
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/postEnquiry" className="nav-link active">
                  Enquiry
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <span>
                <ul className="d-flex navbar-nav me-end dropdown">
                  <li>
                    <Link
                      to="#"
                      className="nav-link active dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Account
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/updateProfile" className="dropdown-item">
                          Update profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={role === "User" ? "/signin" : "/signinemployee"}
                          onClick={logoutUser}
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </span>
            ) : (
              <ul className="d-flex navbar-nav me-right">
                <li>
                  <Link to="/register" className="nav-link active">
                    Register
                  </Link>
                </li>
                <span>
                  <ul className="d-flex navbar-nav me-end dropdown">
                    <li>
                      <Link
                        to="#"
                        className="nav-link active dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Login
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link to="/signin" className="dropdown-item">
                            Customer Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/signinemployee" className="dropdown-item">
                            Employee Login
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </span>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
