import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPinCode] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  const userId = sessionStorage["userId"];
  const updateProfile = () => {
    console.log(1);
    if (name.length === 0) {
      toast.warning("Please enter name");
    } else if (phone.length === 0) {
      toast.warning("Please enter phone number");
    } else if (address1.length === 0) {
      toast.warning("Please enter address1");
    } else if (address2.length === 0) {
      toast.warning("Please confirm your address2");
    } else {
      const body = {
        name,
        companyName,
        phone,
        address1,
        address2,
        pincode,
        city,
        state,
        country,
      };
      // url to call the api
      const url = `${URL}/user/update/${userId}`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.put(url, body).then((response) => {
        console.log(body);
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] === "success") {
          toast.success("User updated successfully");

          // navigate to the signin page
          navigate("/userHome");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-8 col-xl-6 my-4 pt-4 pb-5 shadow bg-body rounded">
        <div className="row mx-auto g-4">
          <div className="col-md-6">
            <label htmlFor="inputName4" className="form-label">
              Name*
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputName4"
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputCompany4" className="form-label">
              Company Name
            </label>
            <input
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputCompany4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPhone4" className="form-label">
              Phone*
            </label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              min={0}
              className="form-control"
              id="inputPhone4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputAddress14" className="form-label">
              Address1*
            </label>
            <input
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputAddress14"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputAddress24" className="form-label">
              Address2*
            </label>
            <input
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputAddress24"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              className="form-select"
              id="country"
              required
            >
              <option>Choose...</option>
              <option>India</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="state" className="col-form-label-sm">
              State
            </label>
            <select
              onChange={(e) => {
                setState(e.target.value);
              }}
              className="form-select"
              id="state"
              required
            >
              <option>Choose...</option>
              <option>Maharashtra</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="city" className="col-form-label-sm">
              City
            </label>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              className="form-control"
              id="city"
              placeholder=""
              required
            />
            <div className="invalid-feedback">city required.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="pin" className="col-form-label-sm">
              Pin code
            </label>
            <input
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
              type="text"
              className="form-control"
              id="pin"
              placeholder=""
              required
            />
            <div className="invalid-feedback">pin code required.</div>
          </div>

          <div className="col d-flex justify-content-md-center">
            <button
              onClick={updateProfile}
              className="btn col-6 btn-outline-dark"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam pariatur
        maxime ea, quis corrupti modi nihil necessitatibus sequi laudantium
        voluptatum ipsum ut libero, sapiente cumque sit aliquid tempore dolorum?
        Dolorum consequatur velit id, quidem doloribus eius soluta atque
        reprehenderit excepturi magni dicta perferendis aliquam eligendi,
        perspiciatis fugiat, ex praesentium blanditiis sapiente minima.
        Repellat, veritatis velit! In, a officiis. Quia temporibus ipsa deserunt
        error aliquam molestiae, fugit commodi quas. Facilis cupiditate commodi
        ipsam doloribus fuga quisquam ex atque aperiam repellat numquam tempora
        mollitia beatae sit quia aliquam labore cumque, deleniti unde ducimus,
        aspernatur quaerat. Amet reiciendis nulla impedit, aspernatur rem alias!
      </div>
    </div>
  );
};

export default UpdateProfile;
