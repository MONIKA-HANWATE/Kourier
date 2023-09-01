import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useLocation } from "react-router";

const Complaint = () => {
  const [description, setDescription] = useState("");
  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

  const complaint = () => {
    if (description.length == 0) {
      toast.warning("please enter description");
    } else {
      const body = {
        complaintStatus: "Raised",
        description,
      };
debugger;
      const url = `${URL}/shipment/complaint/${id}`;

      // make api call using axios
      axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Complaint raised successfully");

          // navigate to home component
          navigate("/userHome");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Complaint</div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputComplaint" className="form-label">
                Describe your issue
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="form-control"
                id="exampleInputComplaint"
                aria-describedby="complaintHelp"
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={complaint}
              className=" w-100 btn btn btn-outline-dark"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
