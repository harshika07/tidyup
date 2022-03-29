import React from "react";

function Login() {
  return (
    <div>
      <section class="login-clean" style={{ background: "#e3ebff" }}>
        <form
          method="post"
          style={{ borderRadius: "5px", background: "rgba(255,255,255,0.82)" }}
        >
          <div class="illustration" style={{ fontFamily: "Sora, sans-serif" }}>
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
          <div class="form-floating mb-3">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Password"
              style={{ background: "var(--bs-body-bg)", borderRadius: "5px" }}
            />
            <label for="floatingInput">Password</label>
          </div>
          <div class="mb-3">
            <button
              class="btn btn-primary d-block w-100"
              type="submit"
              style={{ background: "#3552c8", fontFamily: "Sora, sans-serif" }}
            >
              Log In
            </button>
          </div>
          <a class="forgot" href=" " style={{ fontFamily: "Sora, sans-serif" }}>
            Don't have an account?
          </a>
        </form>
      </section>
    </div>
  );
}

export default Login;
