import domestic from "../../assets/domestic.png";
import premium from "../../assets/premium.png";
import priority from "../../assets/priority.png";
import internatinal from "../../assets/internatinal.png";
import "./services.css";

const Services = () => {
  return (
    <div className="bg-image">
      <div className="heading text-dark">Product and Services</div>
      <div className="container">
        <div className="row">
          <div className="col container shadow bg-body rounded mx-4">
            <div className="row">
              <div className="col">
                <br></br>

                <img src={domestic}></img>
              </div>
              <div>
                <p className="col">
                  The domestic package of services is designed for the
                  customer's time-sensitive needs. Its components include:
                  <li>
                    Domestic Express Services for delivering documents and small
                    parcels.
                  </li>
                  <li>
                    Domestic Cargo Services for delivering heavier consignments
                    that require special arrangements such as bigger vehicles,
                    dedicated manpower and material handling equipment. It
                    ensures priority deliveries at optimal costs, in both air
                    and surface modes.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="col container shadow bg-body rounded mx-4 ">
            <div className="row">
              <div className="col">
                <br></br>

                <img src={premium}></img>
              </div>
              <div>
                <p className="col">
                  Premium Express Product assures delivery to metropolitan and
                  major cities. This provision is custom-made for the seamless
                  delivery of urgent consignments.
                  <li>Delivery of documents and parcels</li>
                  <li>Delivery in tamper-proof security pouch</li>
                  <li>Delivery confirmation via email and SMS alerts</li>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <br></br>
        <div className="row">
          <div className="col container shadow bg-body rounded mx-4">
            <div className="row">
              <div className="col">
                <br></br>

                <img src={priority}></img>
              </div>
              <div>
                <p className="col">
                  <li>
                    Realizing the need to cater to a very niche client base that
                    includes large corporate clients, multi-nationals, financial
                    institutes, and banking and insurance companies, Kourier has
                    introduced an exclusive product called Priority Product.
                  </li>
                  <li>
                    This product gets special attention in terms of its
                    deliveries done at the destinations. We follow a special
                    operating procedure for this product.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="col container shadow bg-body rounded mx-4">
            <div className="row">
              <div className="col">
                <br></br>

                <img src={internatinal}></img>
              </div>
              <div>
                <p className="col">
                  <li>
                  Kourier has thus successfully transformed itself from a
                    domestic courier company to a full scale supply chain
                    solutions provider offering domestic and international
                    express, freight, transportation, logistics management,
                    warehousing and distribution services.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Services;
