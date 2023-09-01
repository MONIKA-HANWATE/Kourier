import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parcel from "./components/Parcel";
import Payment from "./components/Payment";
import Modify from "./components/Modify";
import ShipmentDetails from "./components/ShipmentDetails";
import UpdateProfile from "./pages/UpdateProfile";
import ReceiverAddress from "./pages/ReceiverAddress";
import Complaint from "./pages/Complaint";
import Feedback from "./pages/Feedback";
import Track from "./pages/Track";
import UserShipments from "./components/UserShipments";

import AdminHome from "./employees/AdminHome";
import SigninEmployee from "./employees/SigninEmployee";
import AllShipment from "./employees/AllShipment";
import AddDeliveryAgent from "./employees/AddDeliveryAgent";
import AllDeliveryAgents from "./employees/AllDeliveryAgents";
import AgentHome from "./employees/AgentHome";
import DeactivateAgent from "./employees/DeactivateAgent";
import PostEnquiry from "./employees/Enquiry";
import AssignAgent from "./employees/AssignAgent";
import ShowShipmentByStatus from "./employees/ShowShipmetByStatus";
import ShowResult from "./employees/AllShipmentByStatus";
import AllComplaints from "./employees/AllComplaints";
import AllFeedback from "./employees/AllFeedbacks";
import AllEnquiry from "./employees/AllEnquires";
import AssignedOrders from "./employees/AssignedOrders";
import UpdateTrack from "./employees/Track";

import FAQs from "./static/FAQs";
import Pricing from "./static/Pricing";
import About from "./static/About";
import Services from "./static/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/track" element={<Track />} />
          <Route path="/add/track" element={<UpdateTrack />} />

          <Route
            path="/userHome/receiverAddress"
            element={<ReceiverAddress />}
          />
          <Route path="/user/allShipments" element={<UserShipments />} />
          <Route path="/shipment/allShipments" element={<AllShipment />} />
          <Route path="/userHome/modifyDetails" element={<Modify />} />
          <Route path="/userHome/parcel" element={<Parcel />} />
          <Route path="/userHome/payment" element={<Payment />} />
          <Route path="/userHome/complaint" element={<Complaint />} />
          <Route path="/userHome/feedback" element={<Feedback />} />
          <Route
            path="/userHome/shipmentDetails"
            element={<ShipmentDetails />}
          />
          <Route path="/adminHome" element={<AdminHome />} />

          <Route path="/signinemployee" element={<SigninEmployee />} />
          <Route path="/addDeliveryAgent" element={<AddDeliveryAgent />} />
          <Route path="/showDeliveryAgents" element={<AllDeliveryAgents />} />
          <Route path="/agentHome" element={<AgentHome />} />
          <Route path="/deactivateAgent" element={<DeactivateAgent />} />
          <Route path="/postEnquiry" element={<PostEnquiry />} />
          <Route path="/assignAgent" element={<AssignAgent />} />
          <Route path="/enquiries" element={<AllEnquiry />} />
          <Route
            path="/showShipmentByStatus"
            element={<ShowShipmentByStatus />}
          />
          <Route path="/showResult" element={<ShowResult />} />
          <Route path="/allComplaints" element={<AllComplaints />} />
          <Route path="/allFeedback" element={<AllFeedback />} />
          <Route path="/assignedOrders" element={<AssignedOrders />} />

          <Route path="/faqs" element={<FAQs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
