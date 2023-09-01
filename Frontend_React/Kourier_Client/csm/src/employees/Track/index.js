import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useLocation } from "react-router";

const UpdateTrack = () => {
  const location = useLocation();
  const { shipment } = location.state;
  const [activity, setActivity] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const navigate = useNavigate();
  const udpateTrack = () => {
    if (activity.length == 0) {
      toast.warning("please enter activity");
    } else if (newLocation.length == 0) {
      toast.warning("please enter new location");
    } else {
      const body = {
        newLocation,
        activity,
      };

      // url to make api call
      const url = `${URL}/shipment/updateTrack/${shipment.shipmentId}`;
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          navigate("/adminHome");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="container">
          <div className="heading">Track</div>
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Shipment Id-{shipment.shipmentId}</h5>
              </div>
              <div className="col">
                <h5 className="">
                  {shipment.senderCity}-{shipment.receiverCity}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputLocation1" className="form-label">
                New Location
              </label>
              <input
                onChange={(e) => {
                  setNewLocation(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputLocation1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputActivity1" className="form-label">
                Activity
              </label>
              <textarea
                onChange={(e) => {
                  setActivity(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputActivity1"
              />
            </div>

            <button
              onClick={udpateTrack}
              className=" w-100 btn btn btn-outline-dark"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTrack;
