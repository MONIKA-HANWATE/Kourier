import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const url = `${URL}/feedback/viewAll`;
  const allFeedbacks = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setFeedbacks(result.data.feedbacks);
    });
  };

  useEffect(() => {
    allFeedbacks();
  }, []);

  return (
    <div className="container my-4 py-4 col-8 justify-content-center">
      <h4>Feedback</h4>
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ratings</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => {
              return (
                <tr key={feedback.feedbackId}>
                  <td>{feedback.feedbackId}</td>
                  <td>{feedback.ratings}</td>
                  <td>{feedback.feedback}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFeedback;
