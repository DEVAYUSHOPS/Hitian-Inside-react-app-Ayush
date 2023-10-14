import React from "react";
import "./footer.css";
import newLogo from "../../assets/images/insidewhitelogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {/* ========= Footer ============ */}
      <footer>
        <div className="sections contactus">
          <h1 className="heading">Contact Us</h1>
          <div className="form">
            <input type="text" placeholder="Name" className="formInput name" />
            <input
              type="email"
              placeholder="email"
              className="formInput email"
            />
            <input
              type="text-area"
              placeholder="Write a message"
              className="formInput message"
            />
            <button>Submit</button>
          </div>
        </div>
        <div className="sections contents">
          <h1 className="heading">Contents</h1>
          <ul className="content-list" width="60%">
            <li className="content-items">
              <Link to="/home">Home</Link>
            </li>
            <li className="content-items">
              <Link to="/events">Events</Link>
            </li>
            <li className="content-items">
              <Link to="almanac">Almanac</Link>
            </li>
            <li className="content-items">
              <Link to="merchandise">Merchandise</Link>
            </li>
            <li className="content-items">
              <Link to="members">Members</Link>
            </li>
          </ul>
        </div>
        <div className="sections social">
          <img src={newLogo} alt="Logo" width="50%" />

          <hr
            width="80%"
            style={{
              backgroundColor: "#f2b5b5",
              height: "2px",
              border: "none",
              margin: "3% 0% 3% 0%",
            }}
          />
          <div className="social-icons">
            <a href="https://www.facebook.com/HITian.Inside" target="_blank">
              <i class="fa-brands fa-facebook fa-2xl icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/hitian-inside/mycompany/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="https://www.instagram.com/hitianinside/" target="_blank">
              <i class="fa-brands fa-square-instagram fa-2xl"></i>
            </a>
            <a href="https://www.youtube.com/@hitianinside2131" target="_blank">
              <i class="fa-brands fa-square-youtube fa-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span>
          <i class="fa-solid fa-copyright"></i> All Copyright reserved || 2023
        </span>
      </div>
    </>
  );
}

export default Footer;
