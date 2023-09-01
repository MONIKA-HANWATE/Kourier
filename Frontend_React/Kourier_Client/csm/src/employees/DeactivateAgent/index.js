import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import "./signin.css";

const DeactivateAgent = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [deactivateReason, setdeactivateReason] = useState("");

  const navigate = useNavigate();
  const deactivateEmployee = () => {
    if (employeeId.length == 0) {
      toast.warning("please enter Agent Id");
    } else if (deactivateReason.length == 0) {
      toast.warning("please enter reason to deactivate");
    } else {
      const body = {
        employeeId,
        deactivateReason,
      };

      // url to make signin api call
      const url = `${URL}/employee/deactivate`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Agent Deactivated Successfully");

          // navigate to home component
          navigate("/adminHome");
        } else {
          toast.error("Something went wrong");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Deactivate Agent </div>
          <div className="col">
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
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3  ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Reason*
              </label>
              <textarea
                onChange={(e) => {
                  setdeactivateReason(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={deactivateEmployee}
              className=" w-100 btn btn btn-outline-dark"
            >
              DeactivateAgent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactivateAgent;
