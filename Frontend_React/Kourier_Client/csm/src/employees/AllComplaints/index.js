import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [id, setId] = useState();
  const [complaintStatus, setComplaintStatus] = useState("");

  const navigate = useNavigate();

  const updateStatus = () => {
    const url1 = `${URL}/complaint/updateComplaintStatus/${id}`;

    const body = { complaintStatus };

    axios.put(url1, body).then((response) => {
      const result = response.data;
      console.log(result);
      navigate("/adminHome");
    });
  };

  const url = `${URL}/complaint/viewAll`;
  const allComplaints = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setComplaints(result.data.complaints);
    });
  };

  useEffect(() => {
    allComplaints();
  }, []);

  return (
    <div className="container my-4 py-4">
      <h5>All Complaints</h5>
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Complaint Id</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center" colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => {
              return (
                <tr key={complaint.complaintsId}>
                  <td>{complaint.complaintsId}</td>
                  <td>{complaint.description}</td>

                  <td>{complaint.complaintStatus}</td>
                  <td>
                    <select
                      onChange={(e) => {
                        setComplaintStatus(e.target.value);
                        setId(complaint.complaintsId);
                      }}
                      className="form-select form-select-sm"
                      aria-label=".form-select"
                    >
                      <option value="">Choose</option>
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={updateStatus}
                      type="button"
                      className="btn btn-sm btn-primary"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllComplaints;
