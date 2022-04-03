import React from "react";
import { Link } from "react-router-dom";
import hanger from "./assets/hanger.png";
import wash from "./assets/wash.png";
import iron from "./assets/iron.png";
import laundry from "./assets/laundry.png";

const ServiceCard = (props) => {
  return (
    <div className="col-sm-6 col-md-5 col-lg-5 item">
      <div
        className="box"
        style={{ borderTopColor: "rgb(80,94,108)", borderRadius: "10px" }}
      >
        <img className="img-fluid" src={props.ServiceImg} alt="" />
        <h3 className="name">{props.ServiceHeading}</h3>
        <Link to={{ pathname: `${props.Category}` }}>Proceed</Link>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div>
      <section
        className="features-boxed"
        style={{ fontFamily: "Sora, sans-serif", background: "#e3ebff" }}
      >
        <div className="container">
          <div className="intro">
            <h2 className="text-center" style={{ color: "#3552c8" }}>
              Pick a Service
            </h2>
          </div>
          <div className="row justify-content-center features">
            <ServiceCard
              ServiceImg={hanger}
              ServiceHeading="Dry Cleaning"
              Category="/service/dryclean"
            />
            <ServiceCard
              ServiceImg={wash}
              ServiceHeading="Wash &amp; Fold"
              Category="/service/wash"
            />
            <ServiceCard
              ServiceImg={iron}
              ServiceHeading="Iron &amp; Steam press"
              Category="/service/iron"
            />

            <ServiceCard
              ServiceImg={laundry}
              ServiceHeading="Complete Laundry"
              Category="/service/laundry"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
