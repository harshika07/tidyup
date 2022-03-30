import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { auth, createUser } from "./Firebase/Firebase";
import { useAuth } from "./Firebase/AuthContext";
import "firebase/auth";

function Register() {
  const displayName1 = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (passwordRef.current.value !== conPasswordRef.current.value) {
      alert(
        `Email is ${emailRef.current.value} Password is ${passwordRef.current.value} Con Pass is ${conPasswordRef.current.value}`
      );
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      alert(
        `Name is ${displayName1.current.value}
        Email is ${emailRef.current.value}
        Password is ${passwordRef.current.value}
        Con Pass is ${conPasswordRef.current.value} `
      );

      await signup(emailRef.current.value, passwordRef.current.value);

      await createUser(auth.currentUser.uid, {
        displayName: displayName1.current.value,
        email: emailRef.current.value,
        role: "user",
      });

      navigate("/profile");
    } catch (error) {
      setLoading(true);
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div>
      <section className="login-clean" style={{ background: "#e3ebff" }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <form
          onSubmit={handleSubmit}
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
              placeholder="Full Name"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
              ref={displayName1}
              required={true}
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
              ref={emailRef}
              required={true}
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
              ref={passwordRef}
              required={true}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Confirm Password"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
              ref={conPasswordRef}
              required={true}
            />
            <label htmlfor="floatingInput">Confirm Password</label>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary d-block w-100"
              type="submit"
              disabled={loading}
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
