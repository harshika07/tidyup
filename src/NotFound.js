import React from "react";

function NotFound() {
  return (
    <div>
      <section style={{ minHeight: "100vh", height: "0px", margin: "40px;" }}>
        <div class="row text-center">
          <div class="col">
            <h1
              class="display-1"
              style={{
                color: "#00c9b7",
                fontFamily: "'Bowlby One', serif",
                fontSize: "140px",
              }}
            >
              404
            </h1>
          </div>
        </div>
        <div class="row text-center">
          <div class="col" style={{ paddingTop: "10px;" }}>
            <p style={{ fontFamily: " Sora, sans-serif", fontSize: "20px" }}>
              Oops! The page you requested was not found.
            </p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col">
            <button
              class="btn btn-primary"
              type="button"
              style={{
                borderColor: "#3552c8",
                borderRadius: "20px",
                fontFamily: "Sora, sans-serif",
                color: "#3552c8",
                background: "#ffffff",
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
