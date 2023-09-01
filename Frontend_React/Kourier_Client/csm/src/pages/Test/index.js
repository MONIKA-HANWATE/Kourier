import axios from "axios";
const Test = () => {
  const test = () => {
    const url = "http://localhost:8080/v1/test";
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
    });
  };
  return (
    <div>
      <header className="p-3 bg-info text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use href="../../assets/bootstrap-logo-white.svg" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Ship
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Track
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  About us
                </a>
              </li>
            </ul>

            <div className="text-end">
              <a href="../sign-in/loginpage00.html">Login</a>
              <button type="button" className="btn btn-outline-dark">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      <input onClick={test} type="submit" value="Submit" />
    </div>
  );
};
export default Test;
