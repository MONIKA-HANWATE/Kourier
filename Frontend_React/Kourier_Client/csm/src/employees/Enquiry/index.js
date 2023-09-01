import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import "./signin.css";

const PostEnquiry = () => {
  const [email, setEmail] = useState("");
  const [query, setquery] = useState("");

  const navigate = useNavigate();
  const postEnquiry = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (query.length == 0) {
      toast.warning("please enter query");
    } else {
      const body = {
        email,
        query,
      };

      // url to make signin api call
      const url = `${URL}/enquiry`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Got it. We will contact you soon.");

          // navigate to home component
          navigate("/userHome");
        } else {
          toast.error("Something went wrong.");
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-4 mt-4 px-5 pb-5 shadow bg-body rounded">
        <div className="row justify-content-center">
          <div className="heading">Post Enquiry</div>
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
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputQuery1" className="form-label">
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setquery(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputQuery1"
              />
            </div>

            <button
              onClick={postEnquiry}
              className=" w-100 btn btn btn-outline-dark"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEnquiry;
