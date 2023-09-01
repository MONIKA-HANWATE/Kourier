import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { price } = location.state;
  const navigate = useNavigate();

  const [paymentType, setPaymentType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiration, setExpiration] = useState("");

  const shipmentId = sessionStorage["shipmentId"];

  const addPayment = () => {
    const body = {
      paymentType,
      cardNumber,
      cardHolderName,
      cvv,
      expiration,
    };

    // const shipmentId = sessionStorage["shipmentId"];

    const url = `${URL}/shipment/createShipment/payment/${shipmentId}`;

    axios.post(url, body).then((response) => {
      // get the server result
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Payment details added successfully");
        navigate("/userHome/shipmentDetails", {
          state: { id: shipmentId },
        });
      }
    });
  };

  return (
    <div className="container col-6 my-4 py-4 shadow bg-body rounded">
      {price && <h1>₹ {price}</h1>}

      <div className="my-3">
        <div className="form-check">
          <input
            onChange={(e) => {
              setPaymentType(e.target.value);
            }}
            id="credit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            value="credit card"
            required
          />
          <label className="form-check-label" htmlFor="credit">
            Credit card
          </label>
        </div>
        <div className="form-check">
          <input
            onChange={(e) => {
              setPaymentType(e.target.value);
            }}
            id="debit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            value="debit card"
            required
          />
          <label className="form-check-label" htmlFor="debit">
            Debit card
          </label>
        </div>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="cc-name" className="form-label">
            Name on card
          </label>
          <input
            onChange={(e) => {
              setCardHolderName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="cc-name"
            placeholder=""
            required
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">Name on card is required</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-number" className="form-label">
            Card number
          </label>
          <input
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            type="text"
            className="form-control"
            id="cc-number"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Card number is required</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-expiration" className="form-label">
            Expiration
          </label>
          <input
            onChange={(e) => {
              setExpiration(e.target.value);
            }}
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Expiration date required</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="cc-cvv" className="form-label">
            CVV
          </label>
          <input
            onChange={(e) => {
              setCvv(e.target.value);
            }}
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Security code required</div>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-md-left">
          <Link className="btn mt-3 btn-danger btn-outline-dark" to="/userHome">
            Cancel
          </Link>
        </div>
        <div className="col d-flex justify-content-md-end">
          <button
            onClick={addPayment}
            className="mt-3 btn btn-success btn-outline-dark"
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
