import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import "./signin.css";

const SigninEmployee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signinPerson = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const url = `${URL}/employee/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          // get the data sent by server
          const { employeeId, name, email, role } = result["data"];

          // persist the logged in user's information for future use
          sessionStorage["employeeId"] = employeeId;
          sessionStorage["name"] = name;
          sessionStorage["email"] = email;
          sessionStorage["loginStatus"] = 1;
          sessionStorage["role"] = role;

          // navigate to home component
          if (role === "Admin") {
            navigate("/adminHome");
            toast.success("Welcome Admin");
          } else {
            navigate("/agentHome");
            toast.success("Welcome Agent");
          }
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Employee Login</div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={signinPerson}
              className=" w-100 btn btn btn-outline-dark"
            >
              Signin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninEmployee;
