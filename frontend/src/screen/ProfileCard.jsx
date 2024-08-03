import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { MenuOutlined as MenuOutlinedIcon } from "@mui/icons-material";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [mobilebtn, setMobilebtn] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((res) => {
        setUser(res.data);
        setOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <nav>
        <h1>Guest</h1>
        <div className="mobile">
          <ul className={mobilebtn === "al" ? " " : "active"}>
            <h2 className="bookOrderss" data-aos="flip-up">
              My Booking
            </h2>
            <a href="#">
              <li data-aos="fade-up" data-aos-duration="800">
                Home
              </li>
            </a>
            <a href="#LINKS1">
              {" "}
              <li data-aos="fade-up" data-aos-duration="800">
                Service
              </li>
            </a>
            <a href="#LINKS2">
              <li data-aos="fade-up" data-aos-duration="1200">
                Rooms
              </li>
            </a>
            <a href="#LINKS3">
              <li data-aos="fade-up" data-aos-duration="1600">
                About
              </li>
            </a>
          </ul>
          <button
            onClick={(e) => setMobilebtn(mobilebtn === "al" ? "" : "al")}
            className="menuBtn"
          >
            <MenuOutlinedIcon sx={{ fontSize: 35 }} />
          </button>
        </div>

        <h2 className="bookOrder" data-aos="flip-up">
          My Booking
        </h2>
      </nav>
      {user && (
        <>
          <div className="profileDetails">
            <h1>
              <span id="wish">Welcome</span>, {user.name} 😍
            </h1>
            <p>Email: {user.email}</p>
            <p>Contact: {user.contact}</p>
          </div>
          <h1 id="bookdataprofile">Booking</h1>
          <div className="mainProfile">
            {orders.map((order) => (
              <div key={order._id} className="profileOrder">
                <h5>
                  Name : <p>{order.name}</p>
                </h5>
                <h5>
                  Price : <p>{order.price}</p>
                </h5>
                <h5>
                  Days : <p>{order.day}</p>
                </h5>
                <h5>
                  Floor : <p>{order.floor}</p>
                </h5>
                <h5>
                  Bath : <p>{order.bath}</p>
                </h5>
                <h5>
                  Guest : <p>{order.guest}</p>
                </h5>
                <h5>
                  car : <p>{order.car}</p>
                </h5>
                <h5>
                  fuel : <p>{order.fuel}</p>
                </h5>
              </div>
            ))}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default ProfileCard;
