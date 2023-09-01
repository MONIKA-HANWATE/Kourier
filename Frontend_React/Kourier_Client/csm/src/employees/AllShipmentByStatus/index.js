import { URL } from "../../config";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ShowResult = () => {
  const location = useLocation();
  const { result } = location.state;

  const shipments = result.data.shipments;

  // const url = `${URL}/shipment/viewAll/`;
  // const allShipment = () => {
  //   axios.get(url).then((response) => {
  //     const result = response.data;
  //     setShipments(result.data.shipments);
  //   });
  // };

  // useEffect(() => {
  //   allShipment();
  // }, []);

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
              <th scope="col">Status</th>
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

export default ShowResult;
