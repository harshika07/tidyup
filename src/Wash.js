import React from "react";
import pant from "./assets/pant.jpg";

function Wash() {
  return (
    <div>
      <section
        className="features-boxed"
        style={{ fontFamily: "Sora, sans-serif", background: "#e3ebff" }}
      >
        <div className="container">
          <div className="row justify-content-center features">
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div
                className="box"
                style={{
                  borderTopColor: "rgb(80,94,108)",
                  borderRadius: "10px",
                }}
              >
                <img className="img-fluid" src={pant} alt="" />
                <h3 className="name">tshirt</h3>
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    color: "#ffffff",
                    background: "#3552c8",
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Wash;
