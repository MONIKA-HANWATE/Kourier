import img1 from "../../assets/th.jpg";
import img2 from "../../assets/th1.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="bg-image">
      <br></br>
      <div className="heading text-dark">About Us</div>
      <div className=" container shadow bg-body rounded">
        <div className="row">
          <div className="col-6">
            <p className="container1 text-center my-5">
              <div className="heading text-dark"> Who Are We?</div>
              <br></br> According to the RedSeer Report, Kourier is the largest
              and fastest growing fully-integrated player in India by revenue in
              Fiscal 2022-23. We aim to build the operating system for commerce,
              through a combination of world-class infrastructure, logistics
              operations of the highest quality and cutting-edge engineering and
              technology capabilities.
            </p>
            <br></br>
            <br></br>
          </div>
          <div className="col">
            <br></br>
            <br></br>
            <br></br>
            <img src={img1} className="img-fluid" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container shadow bg-body rounded">
        <div className="row">
          <div className="col">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={img2} className="img-fluid" />
          </div>
          <div className="col-6">
            <p className="container1 text-center my-5">
              <div className="heading text-dark">OUR MISSION</div>
              <br></br>
              Our mission is to enable customers to operate flexible, reliable
              and resilient supply chains at the lowest costs.We provided supply
              chain solutions to a diverse base of over 21000 active customers
              such as e-commerce marketplaces, direct-to-consumer e-tailers and
              enterprises and SMEs across several verticals such as FMCG,
              consumer durables, consumer electronics, lifestyle, retail,
              automotive and manufacturing.
              <br></br>
              This is achieved through high-quality logistics infrastructure and
              network engineering, a vast network of domestic and global
              partners and significant investments in automation, all of which
              are orchestrated by our self-developed logistics operating system
              that drive network synergies within and across our services and
              enhance our value proposition to customers
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default About;
