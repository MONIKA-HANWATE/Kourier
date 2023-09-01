import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="container">
      <h3>Hello, {sessionStorage.name}</h3>
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body ">
                <Link
                  to="/addDeliveryAgent"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Agent
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/showDeliveryAgents"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Show Delivery Agents
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/deactivateAgent"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Deactivate Delivery Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body ">
                <Link
                  to="/assignAgent"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Assign Agent To Shipment
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/shipment/allShipments"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Show All Shipments
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/showShipmentByStatus"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Show Shipment By Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/allComplaints"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View Complaints
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body">
                <Link
                  to="/allFeedback"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View Feedbacks
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow bg-body rounded">
              <div className="card-body ">
                <Link
                  to="/enquiries"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View Enquires
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="container text-center mt-4">
            <div className="row justify-content-center">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <div className="card shadow bg-body rounded">
                  <div className="card-body ">
                    <Link
                      to="/enquiries"
                      className="stretched-link"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Tracking
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="border mx-4 mt-4 mb-3 font-weight-bold border-dark">
        <p className="container text-center my-5  ">
          Choices and decisions must be supported by your passion, resolve, and
          a productive work ethic. If these meet opportunity ~ your success has
          finally come! ~ Archibald Marwizi
        </p>
      </div>
    </div>
  );
};

export default AdminHome;
