import React from "react";
import hanger from "./assets/hanger";
import wash from "./assets/wash";
import iron from "./assets/iron";
import laundry from "./assets/laundry";

const OurService = (props) => {
  return (
    <div class="col-sm-6 item">
      <div class="row">
        <div class="col-md-12 col-lg-5 text-center">
          <img
            class="img-fluid"
            src={props.ColImage}
            alt=""
            style={{ height: "150px" }}
          />
        </div>
        <div class="col">
          <h3 class="name">
            <strong>{props.ColHeader}</strong>
          </h3>
          <p class="description">{props.ColDescribe}</p>
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <div>
      <section class="projects-horizontal">
        <div class="container" style={{ fontFamily: "Sora, sans-serif" }}>
          <div class="intro">
            <h2 class="text-center" style={{ fontFamily: "Sora, sans-serif" }}>
              <strong>About Our Services</strong>
            </h2>
          </div>
          <div class="row projects">
            <OurService
              ColImage={hanger}
              ColHeader="Dry cleaning"
              ColDescribe="Reliable dry cleaning services with a professional touch and input. We use quality solvents for the care of your clothes."
            />
            <OurService
              ColImage={wash}
              ColHeader="Wash and Fold"
              ColDescribe="Washing accompanied with good detergent and our adaptable washing machines set up in a clean environment."
            />
            <OurService
              ColImage={iron}
              ColHeader="Iron and Steam press"
              ColDescribe="Only iron or steam press depending on the clothing material will be carried out on one piece each. Ironing will be done on an adjustable voltage setting"
            />
            <OurService
              ColImage={laundry}
              ColHeader="Complete Laundry"
              ColDescribe="Complete laundry includes all the services under one hook. Wash or dry clean will be done accordingly and so will be the iron or steam press option."
            />
          </div>
        </div>
      </section>
      <section style={{ fontFamily: "Sora, sans-serif", marginTop: "20px" }}>
        <div class="intro">
          <h2 class="text-center" style={{ marginTop: "50px" }}>
            <strong>About TidyUp</strong>
          </h2>
        </div>
        <div class="container" style={{ height: "400px", marginTop: "30px" }}>
          <div class="row" style={{ height: "300px" }}>
            <div
              class="col-md-5 d-flex justify-content-center"
              style={{
                background: "#acbfe6",
                height: "300px",
                paddingtop: "20px;",
              }}
            >
              <img
                style={{ height: "200px", width: "200px", marginTop: "31px" }}
                alt=""
              />
            </div>
            <div class="col" style={{ height: "300px" }}>
              <p class="lead" style={{ height: "300px", padding: "20px;" }}>
                TidyUp brings laundry services online for the convenience of
                their customers and to help them get their laundry done without
                having any obstacle. Professionals and the staff at TidyUp carry
                out the laundry process with good care and in an hygienic
                environment. We make sure that our expertise and experience
                never fails to disappoint our customer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
