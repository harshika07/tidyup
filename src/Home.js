import React from "react";
import lead from "./assets/lead.jpg";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faq(props) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={props.eventKey}>
          <Accordion.Header>{props.AccordionHeader}</Accordion.Header>
          <Accordion.Body>{props.AccordionBody}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
function Home() {
  return (
    <div>
      <section className="d-grid" style={{ marginTop: "18px" }}>
        <div className="row justify-content-start">
          <div className="col-sm-auto col-md-auto col-lg-7 offset-lg-0">
            <img
              className="img-fluid d-flex float-start"
              src={lead}
              width="800px"
              style={{ paddingTop: "10px", paddingLeft: "20px" }}
              alt=""
            />
          </div>
          <div
            className="col-lg-5 float-end"
            style={{ paddingRight: "10px", paddingLeft: "40px" }}
          >
            <h1
              className="display-5"
              style={{
                fontWeight: "800",
                fontFamily: "Sora, sans-serif",
                textAlign: "left",
                color: "#0c022f",
                marginRight: "20px",
                marginTop: "20px",
                lineHeight: "54.4px",
                fontSize: "42.6px",
              }}
            >
              Fresh Clothes, Fresh Life.
            </h1>
            <p
              className="lead text-start"
              style={{
                fontFamily: "Sora, sans-serif",
                margin: "20px 0px 20px",
                marginTop: "20px",
                color: "#37434d",
                marginRight: "20px",
                paddingLeft: "0px",
                paddingRight: "20px",
                marginBottom: "15px",
              }}
            >
              We've got all your laundry covered from making it squeaky clean to
              more appealing. So stop waiting and make your clothes look like
              new.
            </p>
            <Link
              to="/service"
              className="btn action-button"
              type="button"
              style={{
                color: "#ffffff",
                background: "#3552c8",
                borderLeftStyle: "solid",
                border: "2px solid",
                borderRadius: "10px",
                fontFamily: "Sora, sans-serif",
                paddingBottom: "10px",
                paddingTop: "10px",
                marginLeft: "0px",
                paddingLeft: "12px",
              }}
            >
              <strong>Know more</strong>
            </Link>
          </div>
        </div>
      </section>
      <section
        class="features-clean"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        <div class="container">
          <div class="intro" style={{ paddingTop: "70px;" }}>
            <h2
              class="text-center"
              style={{ color: "#0c022f", fontWeight: "800" }}
            >
              Why choose us
            </h2>
          </div>
          <div
            class="row features"
            style={{ paddingTop: "20px", background: "#e3ebff" }}
          >
            <div class="col-sm-6 col-lg-4 item">
              <i
                class="fa fa-check-square-o icon"
                style={{ color: "#3552c8" }}
              ></i>
              <h3 class="name">Quality Assurance</h3>
              <p class="description">
                Guaranteed quality services.&nbsp; Most trusted laundry
                services.
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 item">
              <i class="far fa-clock icon" style={{ color: "#3552c8" }}></i>
              <h3 class="name">Save Time</h3>
              <p class="description">
                Save your time from going to a laundromat. We offer on-time
                services for all
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 item">
              <i
                class="far fa-credit-card icon"
                style={{ color: "#3552c8" }}
              ></i>
              <h3 class="name">Easy Payment</h3>
              <p class="description">
                Make payment easily from your mobile device or computer.
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 item">
              <i
                class="far fa-credit-card icon"
                style={{ color: "#3552c8" }}
              ></i>
              <h3 class="name">Germ-free</h3>
              <p class="description">
                Hygienic and sanitised environment and tools
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 item">
              <i class="fas fa-truck icon" style={{ color: "#3552c8 " }}></i>
              <h3 class="name">Free Pickup &amp; Delivery</h3>
              <p class="description">No extra charges for pickup or delivery</p>
            </div>
            <div class="col-sm-6 col-lg-4 item">
              <i
                class="far fa-money-bill-alt icon"
                style={{ color: " #3552c8" }}
              ></i>
              <h3 class="name">Affordable Prices</h3>
              <p class="description">
                Online services with no extra cost and picket friendly deals
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="d-grid" style={{ margin: "30px" }}>
        <div class="row justify-content-start">
          <div
            class="col-lg-5 float-end"
            style={{ paddingRight: "10px", paddingLeft: "20px" }}
          >
            <h1
              class="display-5 text-start"
              style={{
                fontWeight: " 800",
                fontFamily: "Sora, sans-serif",
                color: "#0c022f",
                marginRight: "20px",
                marginTop: "20px",
                paddingLeft: "0px",
                lineHeight: "54.4px",
                fontSize: "42.6px",
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              class="lead text-start"
              style={{
                fontFamily: "Sora, sans-serif",
                margin: "20px 0px 20px",
                marginTop: "20px",
                color: "#37434d",
                marginRight: "20px",
                paddingLeft: "0px",
                paddingRight: "20px",
                marginBottom: "15px",
              }}
            >
              Are you in a pile of doubts? Our frequently asked questions might
              help you to clear your load. If your questions are not covered
              then mail us your queries
            </p>
            <p
              class="lead text-start"
              style={{
                fontFamily: "Sora, sans-serif",
                margin: " 20px 0px 20px",
                color: "#37434d",
                paddingLeft: "px",
                paddingRight: "20px",
                marginBottom: "15px",
              }}
            >
              <i
                class="far fa-envelope icon"
                style={{ color: "#3552c8", fontSize: "24px" }}
              ></i>
              &nbsp; info@tidyup.com
            </p>
          </div>
          <div class="col" style={{ paddingTop: "30px", marginRight: "20px" }}>
            <Faq eventKey={1} />
            <Faq eventKey={2} />
            <Faq eventKey={3} />
            <Faq eventKey={4} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
