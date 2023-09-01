import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllShipment = () => {
  const [shipments, setShipments] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [shipmentStatus, setShipmentStatus] = useState("");

  const navigate = useNavigate();
  console.log(id + " " + shipmentStatus);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateStatus = () => {
    const url1 = `${URL}/shipment/setShipmentStatus/${id}`;
    const body = { shipmentStatus };

    axios.put(url1, body).then((response) => {
      const result = response.data;
      allShipment();
      // navigate("/shipment/allShipments");
    });
  };

  const url = `${URL}/shipment/viewAll/`;
  const allShipment = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setShipments(result.data.shipments);
    });
  };

  useEffect(() => {
    console.log("effect called");
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
                      <option value="Shipped">Shipped</option>
                      <option value="Out For Delivery">Out For Delivery</option>
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
                  <td>
                    <Link
                      to="/add/track"
                      state={{ shipment: shipment }}
                      type="button"
                      className="btn btn-sm btn-primary"
                    >
                      Track
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <span>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">{shipment.complaint.description}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </span> */}
    </div>
  );
};

export default AllShipment;
