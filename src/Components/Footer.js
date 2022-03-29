import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="footer-clean"
        style={{
          fontFamily: "Sora, sans-serif",
          borderTop: "1px solid rgb(218,227,235)",
          padding: "30px 0px",
        }}
      >
        <div className="container">
          <div className="row justify-content-space-evenly">
            <div className="col-lg-3 item social">
              <p className="text-center copyright">
                TidyUp &copy; 2022. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
