import "./footers.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="container-fluid fixed-bottom d-flex justify-content-between align-items-center py-1 mt-auto border-top">
        <p className="col-md-4 mb-0">&copy; 2023 Kourier, Inc</p>

        <span>
          <li>&#9993; Email : kourier@contact.com</li>
          <li>&#9990; Phone : 123-0456789</li>
        </span>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/pricing" className="nav-link px-2">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faqs" className="nav-link px-2">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2">
              About
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
