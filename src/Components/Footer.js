import React from "react";

function Footer() {
  return (
    <div>
      <footer
        class="footer-clean"
        style={{
          fontFamily: "Sora, sans-serif",
          borderTop: "1px solid rgb(218,227,235)",
          padding: "30px 0px",
        }}
      >
        <div class="container">
          <div class="row justify-content-space-evenly">
            <div class="col-lg-3 item social">
              <p class="text-center copyright">
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
