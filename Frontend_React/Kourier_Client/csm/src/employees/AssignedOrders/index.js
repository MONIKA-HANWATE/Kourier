import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AssignedOrders = () => {
  const [shipments, setShipments] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [shipmentStatus, setShipmentStatus] = useState("");
  const agentId = sessionStorage["employeeId"];

  const navigate = useNavigate();

  const updateStatus = () => {
    const url1 = `${URL}/shipment/setShipmentStatus/${id}`;
    const body = { shipmentStatus };
    console.log(body);

    axios.put(url1, body).then((response) => {
      const result = response.data;
      console.log(result);
      allShipment();
      // navigate("/agentHome");
    });
  };

  const url = `${URL}/employee/assignedShipments/${agentId}`;
  const allShipment = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setShipments(result.data.shipments);
    });
  };

  useEffect(() => {
    allShipment();
  }, []);

  return (
    <div className="container my-4 py-4">
      <h5>All Shipments</h5>
      <div className="table-responsive">
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Tracking Id</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Sender's City</th>
              <th scope="col">Receiver's City</th>
              <th scope="col">Service</th>
              <th scope="col">Shipment Status</th>
              <th scope="col" className="text-center" colSpan="4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => {
              return (
                <tr key={shipment.shipmentId}>
                  <td>{shipment.shipmentId}</td>
                  <td>{shipment.senderName}</td>
                  <td>{shipment.receiverName}</td>
                  <td>{shipment.senderCity}</td>
                  <td>{shipment.receiverCity}</td>
                  <td>{shipment.service.serviceName}</td>
                  <td>{shipment.shipmentStatus}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-primary"
                      to="/userHome/shipmentDetails"
                      state={{ id: shipment.shipmentId }}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <select
                      onChange={(e) => {
                        setShipmentStatus(e.target.value);
                        setId(shipment.shipmentId);
                      }}
                      className="form-select form-select-sm"
                      aria-label=".form-select"
                    >
                      <option value="">Choose</option>
                      <option value="Received">Received</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={updateStatus}
                      type="button"
                      className="btn btn-sm btn-primary"
                    >
                      Update
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

export default AssignedOrders;
