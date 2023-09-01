import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddDeliveryAgent = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  const registerPerson = () => {
    if (name.length == 0) {
      toast.warning("Please enter name");
    } else if (phone.length == 0) {
      toast.warning("Please enter phone number");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length == 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } else if (password != confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        name,
        companyName,
        phone,
        email,
        password,
      };

      // url to call the api
      const url = `${URL}/employee/register`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        console.log(body);
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Delivery Agent Added Successfully");

          // navigate to the signin page
          navigate("/adminHome");
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
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="companyName"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email*
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="inputEmail4"
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
            <label htmlFor="inputPassword4" className="form-label">
              Password*
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="confirmPassword4" className="form-label">
              Confirm Password*
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="confirmPassword4"
            />
          </div>

          <div className="col d-flex justify-content-md-center">
            <button
              onClick={registerPerson}
              className="btn col-6 btn-outline-dark"
            >
              Add Agent
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

export default AddDeliveryAgent;
