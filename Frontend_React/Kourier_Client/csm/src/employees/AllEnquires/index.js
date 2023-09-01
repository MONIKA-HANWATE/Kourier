import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";

const AllEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  const url = `${URL}/enquiry/viewAll`;
  const allEnquiry = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setEnquiries(result.data.enquiries);
    });
  };

  useEffect(() => {
    allEnquiry();
  }, []);

  console.log(enquiries);

  return (
    <div className="container my-4 py-4">
      <h5>Enquiries</h5>
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">Query</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => {
              return (
                <tr key={enquiry.queryId}>
                  <td>{enquiry.queryId}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.query}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEnquiry;
