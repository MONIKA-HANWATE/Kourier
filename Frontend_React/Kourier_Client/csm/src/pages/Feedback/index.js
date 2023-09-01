import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useLocation } from "react-router";

const Feedback = () => {
  const [ratings, setRatings] = useState("");
  const [feedback, setFeedback] = useState("");
  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

  const review = () => {
    if (ratings.length == 0) {
      toast.warning("please enter ratings");
    } else if (feedback.length == 0) {
      toast.warning("please enter feedback");
    } else {
      const body = {
        ratings,
        feedback,
      };

      const url = `${URL}/shipment/feedback/${id}`;

      // make api call using axios
      axios.put(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Feedback submitted successfully");

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
          <div className="heading">Feedback</div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputRatings" className="form-label">
                Rating
              </label>
              <input
                onChange={(e) => {
                  setRatings(e.target.value);
                }}
                type="number"
                min={1}
                max={5}
                className="form-control"
                id="exampleInputRatings"
                aria-describedby="ratingHelp"
              />
              <div id="ratingHelp" className="form-text">
                Enter ratings from 1 to 5.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputFeedback" className="form-label">
                Feedback
              </label>
              <textarea
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
                className="form-control"
                id="exampleInputFeedback"
                rows="3"
              />
            </div>

            <button
              onClick={review}
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

export default Feedback;
