import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./Firebase/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { db, auth, updateUser } from "./Firebase/Firebase";

function UpdateProfile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const { currentUser, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    updateUser(auth.currentUser.uid, {
      displayName: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    });

    if (auth.currentUser.displayName !== nameRef.current.value) {
      await auth.currentUser.updateProfile({
        displayName: nameRef.current.value,
      });
    }
    if (auth.currentUser.email !== emailRef.current.value) {
      await auth.currentUser.updateEmail({
        email: emailRef.current.value,
      });
    }

    Promise.all(promises)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const [ProfileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await db
          .collection("users")
          .doc(auth.currentUser.uid)
          .get();

        console.log("response", response);

        let data = { title: "not found" };

        if (response.exists) {
          console.log("found it");
          data = response.data();
          console.log(data);
        }

        setProfileInfo(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      <div>
        <form onSubmit={handleSubmit} style={{ marginBottom: "60px" }}>
          <div className="container">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Personal Details
                          </h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="fullName">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Enter full name"
                              defaultValue={ProfileInfo.displayName}
                              ref={nameRef}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="eMail">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email ID"
                              defaultValue={ProfileInfo.email}
                              ref={emailRef}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="phone">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Enter phone number"
                              defaultValue={ProfileInfo.phone}
                              ref={phoneRef}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mt-3 mb-2 text-primary">Address</h6>
                        </div>
                        <div className="form-group mb-3">
                          <textarea
                            className="form-control"
                            name="Address"
                            placeholder="Address"
                            rows="3"
                            defaultValue={ProfileInfo.address}
                            ref={addressRef}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <Link
                              to="/profile"
                              className="btn btn-danger"
                              style={{ marginTop: "10px" }}
                            >
                              Cancel
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{ marginTop: "10px", marginLeft: "10px" }}
                            >
                              Confirm Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
