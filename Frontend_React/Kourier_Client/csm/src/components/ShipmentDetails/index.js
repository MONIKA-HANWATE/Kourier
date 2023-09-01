import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../../config";

const ShipmentDetails = () => {
  const location = useLocation();
  const { id } = location.state;
  console.log(id);

  const [shipment, setShipment] = useState([]);

  const url = `${URL}/shipment/getShipment/${id}`;

  const shipmentDetails = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setShipment(result.data.shipment);
    });
  };

  useEffect(() => {
    shipmentDetails();
  }, []);

  return (
    <div className="container col-6 my-4 py-4 shadow bg-body rounded">
      <div className="container ps-0 mt-3">
        <div className="row">
          <div className="text-center mb-3">
            <h4>Your Shipment Details</h4>

            <div className="table-responsive">
              <table className="table mt-3">
                <thead>
                  <tr className="">
                    <th scope="row">Shipment From</th>
                    <th scope="row">Shipment To</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td>{shipment.senderName}</td>
                    <td>{shipment.receiverName}</td>
                  </tr>
                  <tr>
                    <td>{shipment.senderCompanyName}</td>
                    <td>{shipment.receiverCompanyName}</td>
                  </tr>

                  <tr>
                    <td>{shipment.senderEmail}</td>
                    <td>{shipment.receiverEmail}</td>
                  </tr>
                  <tr>
                    <td>{shipment.senderPhone}</td>
                    <td>{shipment.receiverPhone}</td>
                  </tr>
                  <tr>
                    <td>
                      {shipment.senderAddressLine1},
                      {shipment.senderAddressLine2}
                    </td>
                    <td>
                      {shipment.receiverAddressLine1},
                      {shipment.receiverAddressLine2}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {shipment.senderCity}-{shipment.senderPincode}
                    </td>
                    <td>
                      {shipment.receiverCity}-{shipment.receiverPincode}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {shipment.senderState}, {shipment.senderCountry}
                    </td>
                    <td>
                      {shipment.receiverState}, {shipment.receiverCountry}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
