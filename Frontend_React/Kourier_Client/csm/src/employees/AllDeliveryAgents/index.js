import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";

const AllDeliveryAgents = () => {
  const [deliveryAgents, setDeliveryAgents] = useState([]);

  const url = `${URL}/employee/getall`;
  const allDeliveryAgents = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setDeliveryAgents(result.data.deliveryAgents);
    });
  };
  useEffect(() => {
    allDeliveryAgents();
  }, []);

  return (
    <div className="container my-4 py-4">
      <h5>Delivery Agents</h5>
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Employee Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Account Status</th>
              <th scope="col">Work Status</th>
            </tr>
          </thead>
          <tbody>
            {deliveryAgents.map((deliveryAgent) => {
              return (
                <tr key={deliveryAgent.employeeId}>
                  <td>{deliveryAgent.employeeId}</td>
                  <td>{deliveryAgent.name}</td>
                  <td>{deliveryAgent.phone}</td>
                  <td>{deliveryAgent.email}</td>
                  <td>{deliveryAgent.city}</td>
                  <td>{deliveryAgent.state}</td>
                  <td>{deliveryAgent.country}</td>
                  <td>{deliveryAgent.accountStatus}</td>
                  <td> {deliveryAgent.workStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryAgents;
