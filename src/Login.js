import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "./Firebase/AuthContext";
import "firebase/auth";

function Login(props) {
  const { role, getRole } = props;
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      alert(
        `Email is ${emailRef.current.value}
        Password is ${passwordRef.current.value}`
      );
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
      getRole(currentUser.uid);
      console.log(`afterlogin ${role}`);
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
              Login
            </h1>
          </div>
          <div className="form-floating mb-3">
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
          <div className="form-floating mb-3">
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
          <div className="mb-3">
            <button
              className="btn btn-primary d-block w-100"
              type="submit"
              style={{ background: "#3552c8", fontFamily: "Sora, sans-serif" }}
              disabled={loading}
            >
              Log In
            </button>
          </div>
          <Link
            to="/register"
            className="forgot"
            href=" "
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Don't have an account?
          </Link>
        </form>
      </section>
    </div>
  );
}

export default Login;
