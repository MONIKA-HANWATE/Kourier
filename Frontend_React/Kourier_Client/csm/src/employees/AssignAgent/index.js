import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import "./signin.css";

const AssignAgent = () => {
  const [shipmentId, setShipmentId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const navigate = useNavigate();
  const assignAgent = () => {
    if (employeeId.length == 0) {
      toast.warning("please enter Agent Id");
    } else if (shipmentId.length == 0) {
      toast.warning("please enter reason to deactivate");
    } else {
      const body = {
        employeeId,
        shipmentId,
      };

      // url to make signin api call
      const url = `${URL}/shipment/assignDeliveryAgent`;

      // make api call using axios
      axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Agent Assigned Successfully");

          // navigate to home component
          navigate("/adminHome");
        } else {
          toast.error("Please enter correct details");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Assign Agent </div>
          <div className="col">
            <div className="mb-3  ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Shipment Id*
              </label>
              <input
                onChange={(e) => {
                  setShipmentId(e.target.value);
                }}
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputId" className="form-label">
                Agent Id*
              </label>
              <input
                onChange={(e) => {
                  setEmployeeId(e.target.value);
                }}
                type="number"
                className="form-control"
                id="exampleInputId"
              />
            </div>
            <button
              onClick={assignAgent}
              className=" w-100 btn btn btn-outline-dark"
            >
              Assign Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignAgent;
