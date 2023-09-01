import Shipment from "../../components/Shipment";
import UserShipment from "../../components/UserShipments";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import Pricing from "../../static/Pricing";

const UserHome = () => {
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);
  console.log(value);
  const pickUpDate = value;
  const navigate = useNavigate();
  const url = `${URL}/shipment/schedule/${id}`;

  const body = {
    pickUpDate,
  };

  const schedulePickUp = () => {
    axios.post(url, body).then((response) => {
      // get the server result
      const result = response.data;
      const estimatedDelivery = result.data.estimatedDelivery;
      console.log(estimatedDelivery);
      if (result["status"] == "success") {
        toast.success("Delivery schedule successfully");
        navigate("/home");
      }
    });
  };

  return (
    <div className="container my-4 py-4 shadow bg-body rounded">
      <h3>Hello, {sessionStorage.name}</h3>

      <div className="row mt-4">
        <div className="">
          <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="shipment-tab"
                data-bs-toggle="tab"
                data-bs-target="#shipment"
                type="button"
                role="tab"
                aria-controls="shipment"
                aria-selected="true"
              >
                Create a New Shipment
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pickup-tab"
                data-bs-toggle="tab"
                data-bs-target="#pickup"
                type="button"
                role="tab"
                aria-controls="pickup"
                aria-selected="false"
              >
                Schedule a Pick up
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="quote-tab"
                data-bs-toggle="tab"
                data-bs-target="#quote"
                type="button"
                role="tab"
                aria-controls="quote"
                aria-selected="false"
              >
                Get Quote
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="shipments-tab"
                data-bs-toggle="tab"
                data-bs-target="#shipments"
                type="button"
                role="tab"
                aria-controls="shipments"
                aria-selected="false"
              >
                My Shipments
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="shipment"
              role="tabpanel"
              aria-labelledby="shipment-tab"
            >
              <Shipment />
            </div>
            <div
              className="tab-pane fade"
              id="pickup"
              role="tabpanel"
              aria-labelledby="pickup-tab"
            >
              <div className="container my-4 py-4 justify-content-center">
                <div className="row justify-content-center">
                  <h6 className="text-center">Enter Your Shipment Number</h6>
                  <input
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    className="input col-4"
                    placeholder="#123"
                    type="Number"
                  />
                </div>
                <div className="row mt-4 justify-content-center">
                  <h6 className="text-center">Enter Pick-up date</h6>
                  <input
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    className="input col-4 "
                    type="datetime-local"
                  />
                </div>

                <div className="row mt-4 justify-content-center">
                  <button
                    onClick={schedulePickUp}
                    className="btn-sm col-2 btn-outline-dark"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="quote"
              role="tabpanel"
              aria-labelledby="quote-tab"
            >
              <Pricing />
            </div>

            <div
              className="tab-pane fade"
              id="shipments"
              role="tabpanel"
              aria-labelledby="shipments-tab"
            >
              <UserShipment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
