import { Link } from "react-router-dom";

const AgentHome = () => {
  console.log(sessionStorage["name"]);
  return (
    <div className="container mt-2">
      <h3>Hello, {sessionStorage.name}</h3>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div class="card shadow bg-body rounded">
              <div class="card-body">
                <Link
                  to="/assignedOrders"
                  className="stretched-link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View Assigned Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border mx-4 mt-4 mb-3">
        <p className="container text-center my-5">
          According to the RedSeer Report, Kourier is the largest and fastest
          growing fully-integrated player in India by revenue in Fiscal 2022-23. We
          aim to build the operating system for commerce, through a combination
          of world-class infrastructure, logistics operations of the highest
          quality and cutting-edge engineering and technology capabilities.
        </p>
      </div>
    </div>
  );
};

export default AgentHome;
