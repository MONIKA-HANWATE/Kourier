import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";

const Parcel = () => {
  const navigate = useNavigate();

  const [parcelName, setParcelName] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [serviceId, setServiceId] = useState("");

  const addParcel = () => {
    const body = {
      parcel: { parcelName, description, length, width, height, weight },
      serviceId: serviceId,
    };

    console.log(body);

    const shipmentId = sessionStorage["shipmentId"];

    const url = `${URL}/shipment/createShipment/parcel/${shipmentId}`;

    axios.post(url, body).then((response) => {
      // get the server result
      const result = response.data;
      if (result["status"] == "success") {
        const price = result.data.price;

        toast.success("Parcel details added successfully");
        navigate("/userHome/payment", { state: { price } });
      }
    });
  };

  return (
    <div className="container my-4 py-4 shadow bg-body rounded">
      <div className="row">
        <h4 className="mb-3">Shipment Details</h4>
        <div className="col col-7">
          <div className="row g-2">
            <div className="col-lg-4">
              <input
                onChange={(e) => {
                  setParcelName(e.target.value);
                }}
                type="radio"
                className="btn-check "
                name="options"
                id="option1"
                autoComplete="off"
                value="Document"
              />
              <label
                className="btn d-grid mx-auto btn-outline-dark"
                htmlFor="option1"
              >
                Document
              </label>
            </div>
            <div className="col-lg-4">
              <input
                onChange={(e) => {
                  setParcelName(e.target.value);
                }}
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                value="Non-Document"
                autoComplete="off"
              />
              <label
                className="btn d-grid mx-auto btn-outline-dark"
                htmlFor="option2"
              >
                Non-Document
              </label>
            </div>
          </div>

          <div className="row mt-2 col-8">
            <h6>Describe your shipment</h6> <br />
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="Such as document type, books, electronics"
              />
            </div>
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                type="number"
                min={0}
                className="form-control"
                placeholder="length in cm"
              />
            </div>
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setWidth(e.target.value);
                }}
                type="number"
                min={0}
                className="form-control"
                placeholder="width in cm"
              />
            </div>
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                type="number"
                min={0}
                className="form-control"
                placeholder="height in cm"
              />
            </div>
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="number"
                min={0}
                max={10}
                className="form-control"
                placeholder="weight in kg"
              />
            </div>
          </div>

          <div className="row g-2 pb-2">
            <div className="col-lg-4">
              <input
                onChange={(e) => {
                  setServiceId(e.target.value);
                }}
                type="radio"
                className="btn-check "
                name="options1"
                id="option3"
                autoComplete="off"
                value="1"
              />
              <label
                className="btn d-grid mx-auto btn-outline-dark"
                htmlFor="option3"
              >
                Standard
              </label>
            </div>
            <div className="col-lg-4">
              <input
                onChange={(e) => {
                  setServiceId(e.target.value);
                }}
                type="radio"
                className="btn-check"
                name="options1"
                id="option4"
                value="2"
                autoComplete="off"
              />
              <label
                className="btn d-grid mx-auto btn-outline-dark"
                htmlFor="option4"
              >
                Premium
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-md-start">
            <button
              onClick={addParcel}
              className="btn btn-outline-dark"
              type="button"
            >
              Next
            </button>
          </div>
        </div>

        <div className="col col-5">
          <div className="row">
            <div className="col mb-2 py-4 me-3 shadow bg-body rounded">
              <h5>is it a document?</h5>
              Some items you might think are documents are not - check before
              completing your shipment. <br />
              <Link to="">&gt; help me determine if my item is document</Link>
            </div>
          </div>
          <div className="row">
            <div className="col my-2 py-4 me-3 shadow bg-body rounded">
              <h6>Prohibited Items</h6>
              Some items you are shipping may be prohibited <br />
              <Link to="">&gt; view prohibited items</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
