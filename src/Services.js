import React from "react";
import hanger from "./assets/hanger";
import wash from "./assets/wash";
import iron from "./assets/iron";
import laundry from "./assets/laundry";

const ServiceCard = (props) => {
  <div class="col-sm-6 col-md-5 col-lg-5 item">
    <div
      class="box"
      style={{ borderTopColor: "rgb(80,94,108)", borderRadius: "10px" }}
    >
      <img class="img-fluid" src={props.ServiceImg} alt="" />
      <h3 class="name">{props.ServiceHeading}</h3>
      <a
        class="learn-more"
        href=" "
        style={{ borderColor: "#3552c8", color: "#3552c8;" }}
      >
        {props.ServiceLink}
      </a>
    </div>
  </div>;
};

function Services() {
  return (
    <div>
      <section
        class="features-boxed"
        style={{ fontFamily: "Sora, sans-serif", background: "#e3ebff" }}
      >
        <div class="container">
          <div class="intro">
            <h2 class="text-center" style={{ color: "#3552c8" }}>
              Pick a Service
            </h2>
          </div>
          <div class="row justify-content-center features">
            <ServiceCard
              ServiceImg={hanger}
              ServiceHeading="Dry Cleaning"
              ServiceLink=""
            />
            <ServiceCard
              ServiceImg={wash}
              ServiceHeading="Wash &amp; Fold"
              ServiceLink=""
            />
            <ServiceCard
              ServiceImg={iron}
              ServiceHeading="Iron &amp; Steam press"
              ServiceLink=""
            />
            <ServiceCard
              ServiceImg={laundry}
              ServiceHeading="Complete Laundry"
              ServiceLink=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
