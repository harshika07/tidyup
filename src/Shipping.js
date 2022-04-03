import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Firebase/AuthContext";
import { db, auth } from "./Firebase/Firebase";

function Shipping() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const slotRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userInfo = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        date: dateRef.current.value,
        slot: slotRef.current.value,
        userId: auth.currentUser.uid,
      };
    } catch (err) {
      console.log(err);
    }
  }

  const [ProfileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await db
          .collection("users")
          .doc(auth.currentUser.uid)
          .get();

        let data = { title: "not found" };
        if (response.exists) {
          data = response.data();
        }
        setProfileInfo(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  let today = new Date();
  let dd = String(today.getDate() + 1).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  let max1 = new Date();
  let dd1 = String(max1.getDate()).padStart(2, "0");
  let mm1 = String(max1.getMonth() + 2).padStart(2, "0");
  let yyyy1 = max1.getFullYear();
  max1 = yyyy1 + "-" + mm1 + "-" + dd1;

  return (
    <section className="register-photo" style={{ background: "#e3ebff" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 offset-lg-0">
              <h2
                className="text-center"
                style={{ fontSize: "22px", fontFamily: "Sora, sans-serif" }}
              >
                <strong>Order Details</strong>
              </h2>
              <div className="mb-3"></div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  defaultValue={ProfileInfo.displayName}
                  ref={nameRef}
                  disabled={true}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone"
                  ref={phoneRef}
                  defaultValue={ProfileInfo.phone}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Address"
                  ref={addressRef}
                  defaultValue={ProfileInfo.address}
                ></textarea>
              </div>
              <div className="d-inline-flex mb-3">
                <input
                  className="form-control"
                  type="date"
                  ref={dateRef}
                  min={today}
                  max={max1}
                  style={{
                    paddingRight: "12px",
                    paddingLeft: "12px",
                    width: "200px",
                  }}
                  required
                />
              </div>
              <div className="input-group">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  ref={slotRef}
                  required
                >
                  <option defaultValue>Choose Your Slot</option>
                  <option value="9-12">9am-12pm</option>
                  <option value="12-3">12pm-3pm</option>
                  <option value="3-6">3pm-6pm</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cell 1</td>
                      <td>Cell 2</td>
                      <td>Cell 2</td>
                    </tr>
                  </tbody>
                  Your total is &#x20b9; total
                </table>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary d-block w-100"
                  type="submit"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    background: "#3552c8",
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Shipping;
