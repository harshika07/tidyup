import React from "react";
import "./css/styles.css";
import tee from "./assets/tee.jpg";
import pant from "./assets/pant.jpg";

const Product = (props) => {
  return (
    <div className="col-sm-6 col-md-5 col-lg-4 item">
      <div
        className="box"
        style={{ borderTopColor: "rgb(80,94,108)", borderRadius: "10px" }}
      >
        <img className="img-fluid" src={props.ProductImg} alt="" />
        <h3 className="name">{props.ProductHeading}</h3>
        <button
          className="btn btn-primary"
          type="button"
          style={{
            borderRadius: "20px",
            fontFamily: "Sora, sans-serif",
            color: "#ffffff",
            background: "#3552c8",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

function Category() {
  return (
    <div>
      <section
        className="features-boxed"
        style={{ fontFamily: "Sora, sans-serif", background: "#e3ebff" }}
      >
        <div className="container">
          <div className="row justify-content-center features">
            <Product ProductImg={tee} ProductHeading="tshirts" />
            <Product ProductImg={pant} ProductHeading="pant" />
            <Product ProductImg={pant} ProductHeading="pant" />
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Category;
