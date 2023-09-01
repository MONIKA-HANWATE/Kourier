import "./faq.css";
const FAQs = () => {
  return (
    <div className="bg-image">
      <br></br>
      <div className="heading text-dark">Frequently Asked Questions</div>
      <div className="container">
        <div className="container shadow bg-body rounded">
          <br />
          <h4> How can I track my shipment?</h4>
          <h6>
            To track your shipment, visit www.kourier.com, enter your tracking ID
            (AWB/LRN) and click on 'TRACK'. You can login using your mobile
            number to track and take actions on all your Delhivery shipments in
            one go.
          </h6>
          <br></br>
        </div>
        <br></br>
        <div className=" container shadow bg-body rounded">
          <br />
          <h4> What do I do if my shipment is delayed?</h4>
          <h6>
            Due to unforeseen circumstances, your delivery can get delayed.A new
            delivery timeframe will be shared with you when you track your
            shipment on our website. However, in case you have any additional
            questions or concerns, please raise a support ticket from the
            tracking page.
          </h6>
          <br></br>
        </div>
        <br></br>
        <div className="container shadow bg-body rounded">
          <br />
          <h4>What do I do if my shipment status is still at Pick up?</h4>
          <h6>
            'Pick up' status means that Delhivery hasn't received the physical
            shipment from your merchant. Please contact your merchant for
            further assistance.
          </h6>
          <br></br>
        </div>
        <br></br>
        <div className="container shadow bg-body rounded">
          <br />
          <h4>How can I get proof of delivery for my shipment?</h4>
          <h6>
            Kindly raise a support ticket from the tracking page. The proof of
            delivery will be sent to you over email
          </h6>
          <br></br>
        </div>
        <br></br>
        <div className="container shadow bg-body rounded">
          <br />
          <h4>
            What do I do if I haven't received the refund of my returned
            shipment?
          </h4>
          <h6>
            As a delivery partner, we do not have any refund related
            information. We request you to contact your merchant for further
            assistance.
          </h6>
          <br></br>
        </div>
        <br></br>
        <div className="container shadow bg-body rounded">
          <br />
          <h4> My shipment is out for delivery. When will I receive it?</h4>
          <h6>My shipment is out for delivery. When will I receive it?</h6>
          <br></br>
        </div>
        <br></br>
        <div className="container shadow bg-body rounded">
          <br />
          <h4>
            {" "}
            What do I do on receiving a wrong/damaged/incorrect shipment?
          </h4>
          <h6>
            Delhivery being a logistics partner to your merchant, doesn't
            guarantee product quality. We assure you that all shipments in our
            network will reach you untampered and in the same condition as
            handed over to us by your merchant. Please contact your merchant or
            the marketplace to raise any product related issue.
          </h6>
          <br></br>
        </div>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default FAQs;
