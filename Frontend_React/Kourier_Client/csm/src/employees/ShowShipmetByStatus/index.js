import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import "./signin.css";

const ShowShipmentByStatus = () => {
  const [shipmentStatus, setShipmentStatus] = useState("");
  const navigate = useNavigate();
  const ShowShipmentUsingStatus = () => {
    if (shipmentStatus.length == 0) {
      toast.warning("please select shipment status");
    } else {
      const body = {
        shipmentStatus,
      };

      // url to make signin api call
      const url = `${URL}/shipment/getShipmentByStatus`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Here are shipment details");

          // navigate to home component
          navigate("/showResult", { state: { result } });
        } else {
          toast.error("Something went wrong");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4  pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Show By Status </div>
          <div className="mb-3">
            <label htmlFor="shipmentStatus" className="col-form-label-sm">
              Select Shipment Status
            </label>
            <select
              onChange={(e) => {
                setShipmentStatus(e.target.value);
              }}
              className="form-select"
              id="country"
              required
            >
              <option>Choose...</option>
              <option>Unbooked</option>
              <option>Booked</option>
              <option>Received</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Out For Delivery</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            onClick={ShowShipmentUsingStatus}
            className=" w-100 btn btn btn-outline-dark"
          >
            Show Shipments
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowShipmentByStatus;
