import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import home2 from "../../assets/home1.jpg";
import home1 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";

const Home = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <div className="bgimage">
        <div className="container col-md-4 mt-4">
          <br />
          <br />
          <br />
          <br />
          <div className="input-group mt-4">
            <input
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your tracking number"
              aria-label="Enter your tracking number"
              aria-describedby="button-addon2"
            />
            <Link
              // to={{ pathname: "/track", state: { id: true } }}
              to="/track"
              state={id}
              className="btn btn-outline-light"
              type="button"
              id="button-addon2"
            >
              Track
            </Link>
          </div>
        </div>
        {/* <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-2">
            <div className="card shadow bg-body rounded">
              <div className="card-body ">
                <Link
                  to="/track"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Track
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/track"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Ship
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/ship"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="border mx-4 mt-4 mb-3 border-dark">
        <p className="container text-center my-5">
          When people need to get packages, cargo or freight within India, Kourier
          is the company that can provide the reliable shipping services you
          need. For individuals, this can include your purchases made on the
          Internet using our online shopping services and assistance, or your
          personal belongings if you are moving to or from One Happy Island. For
          businesses, we provide a full range of cargo services, including
          freight forwarding by air or sea, shipping project logistics planning
          and execution, warehousing and distribution solutions, customs
          clearance and documentation, and general courier and delivery
          services. Your order moves us and we look forward to providing you
          with excellent customer service that exceeds your expectations!
        </p>
      </div>
      <div className=" heading text-dark">How it Works?</div>
      <div className="sub text-center text-dark">
        The Kourier platform is hassle free and simple to use!
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col shadow bg-body rounded mx-2">
            <br></br>
            <br></br>
            <img src={home1} className="img-fluid" />
            <div className="container text-center">
              <br></br>
              <h3>1.Login</h3>
              <p>New on Kourier need to Singin/Login on www.Kourier.com</p>
            </div>
          </div>
          <div className="col shadow bg-body rounded mx-2">
            <br></br>
            <br></br>
            <img src={home2} className="img-fluid" />
            <div className="container text-center">
              <br></br>
              <h3>2.Create Shipment</h3>
              <p>You need to create your shipment and fill its details.</p>
            </div>
          </div>
          <div className="col shadow bg-body rounded mx-2">
            <img src={home3} className="img-fluid" />
            <div className="container text-center">
              <br></br>
              <br></br>
              <br></br>

              <h3>3.Pickup/Delivery</h3>
              <p>
                Our Delivery agent will come to your location for picking up the
                shipment.
              </p>
            </div>
          </div>
          <div className="col shadow bg-body rounded mx-2">
            <br></br>
            <img src={home4} className="img-fluid" />
            <div className="container text-center">
              <br></br>
              <br></br>
              <h3>4.Track</h3>
              <p>You can track your shipment on www.Kourier.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
