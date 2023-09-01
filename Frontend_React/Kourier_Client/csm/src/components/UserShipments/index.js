import { Link } from "react-router-dom";
import { URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const UserShipments = () => {
  const [shipments, setShipments] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);

  const userId = sessionStorage["userId"];

  const url = `${URL}/user/viewAll/${userId}`;
  const userShipments = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setShipments(result.data.shipments);
    });
  };

  useEffect(() => {
    userShipments();
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
              <th scope="col">Estimated Delivery</th>
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
                  <td>{shipment.service.estimatedDelivery}</td>
                  <td>{shipment.shipmentStatus}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to="/userHome/shipmentDetails"
                      state={{ id: shipment.shipmentId }}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to="/userHome/modifyDetails"
                      state={{ id: shipment.shipmentId }}
                    >
                      Modify
                    </Link>
                  </td>
                  <td>
                    {shipment.complaint ? (
                      // <span>
                      //   <button
                      //     type="button"
                      //     className="btn btn-primary"
                      //     data-bs-toggle="modal"
                      //     data-bs-target="#exampleModal"
                      //   >
                      //     Launch demo modal
                      //   </button>
                      //   <div
                      //     className="modal fade"
                      //     id="exampleModal"
                      //     tabIndex="-1"
                      //     aria-labelledby="exampleModalLabel"
                      //     aria-hidden="true"
                      //   >
                      //     <div className="modal-dialog">
                      //       <div className="modal-content">
                      //         <div className="modal-header">
                      //           <h5
                      //             className="modal-title"
                      //             id="exampleModalLabel"
                      //           >
                      //             Modal title
                      //           </h5>
                      //           {/*   */}
                      //         </div>
                      //         <div className="modal-body">
                      //           {shipment.complaint.description}
                      //         </div>
                      //         <div className="modal-footer">
                      //           <button
                      //             type="button"
                      //             className="btn btn-secondary"
                      //             data-bs-dismiss="modal"
                      //           >
                      //             Close
                      //           </button>
                      //           <button
                      //             type="button"
                      //             className="btn btn-primary"
                      //           >
                      //             Save changes
                      //           </button>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </span>
                      <span>
                        <Button variant="primary" onClick={handleShow}>
                          Complaint
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <ModalHeader closeButton>
                            <ModalTitle>Complaint Details</ModalTitle>
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              Submitted already
                              {/* {shipment.shipmentId} */}
                              {/* {console.log(shipment.complaint.description)}
                            {shipment.complaint.description} */}
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </span>
                    ) : (
                      <Link
                        className="btn btn-primary"
                        to="/userHome/complaint"
                        state={{ id: shipment.shipmentId }}
                      >
                        Complaint
                      </Link>
                    )}
                  </td>
                  <td>
                    {shipment.feedback ? (
                      <span>
                        <Button variant="primary" onClick={handleShow}>
                          Feedback
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <ModalHeader closeButton>
                            <ModalTitle>Feedback Details</ModalTitle>
                          </ModalHeader>
                          <ModalBody>Submitted already</ModalBody>
                          <ModalFooter>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </span>
                    ) : (
                      <Link
                        className="btn btn-primary"
                        to="/userHome/feedback"
                        state={{ id: shipment.shipmentId }}
                      >
                        Feedback
                      </Link>
                    )}
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

export default UserShipments;
