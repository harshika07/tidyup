import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <section className="login-clean" style={{ background: "#e3ebff" }}>
        <form
          method="post"
          style={{ borderRadius: "5px", background: "rgba(255,255,255,0.82)" }}
        >
          <div
            className="illustration"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            <h1
              style={{
                color: "#37434d",
                fontFamily: "Sora, sans-serif",
                fontWeight: "bold",
                fontSize: "24.9px",
              }}
            >
              Sign Up
            </h1>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label htmlfor="floatingInput">Confirm Password</label>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary d-block w-100"
              type="submit"
              style={{ background: "#3552c8", fontFamily: "Sora, sans-serif" }}
            >
              Sign Up
            </button>
          </div>
          <Link
            className="forgot"
            to="/login"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Already have an account?
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Register;
