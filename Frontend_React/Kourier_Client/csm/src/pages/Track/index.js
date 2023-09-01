import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import Moment from "react-moment";
import { useLocation } from "react-router";

const Track = () => {
  const location = useLocation();
  console.log(location);
  // const { id } = location.state;

  const [trackId, setTrackId] = useState(location.state ? location.state : "");
  const [trackDetails, setTrackDetails] = useState([]);
  const track = () => {
    if (trackId.length == 0) {
      toast.info("Please enter tracking id");
    } else {
      console.log(trackId);
      const url = `${URL}/shipment/track/${trackId}`;

      axios.get(url, null).then((response) => {
        const result = response.data;
        console.log(result.data);
        setTrackDetails(result.data.trackingDetails);
      });
    }
  };

  useEffect(() => {
    track();
  }, []);

  return (
    <div>
      <div className=" heading text-dark">Enter Your Tracking Id</div>
      <div className="container col-5 my-4 py-4 justify-content-center shadow bg-body rounded">
        <br />
        <div className="row  justify-content-center">
          <input
            onChange={(e) => {
              setTrackId(e.target.value);
            }}
            className="input mt-2 col-3"
            placeholder="#123"
            type="Number"
            min={0}
          />
        </div>

        <div className="row mt-3 justify-content-center">
          <button onClick={track} className="btn-sm col-3 btn-outline-dark">
            Track
          </button>
        </div>
        <br />
      </div>
      {trackDetails.length > 0 && (
        <div className="container col-5 my-4 py-4 justify-content-center shadow bg-body rounded">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">Tracking Id</th>
                <th scope="col">New Location</th>
                <th scope="col">Activity</th>
                <th scope="col">Date</th>
              </tr>
            </thead>

            <tbody>
              {trackDetails.map((track) => {
                return (
                  <tr key={track.trackingId} className="text-center">
                    <td>{trackId}</td>
                    <td>{track.newLocation}</td>
                    <td>{track.activity}</td>
                    <td>
                      <Moment format="DD/MM/YYYY HH:mm:ss">{track.date}</Moment>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Track;
