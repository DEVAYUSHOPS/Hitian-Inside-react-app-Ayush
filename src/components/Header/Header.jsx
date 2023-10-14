import { useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/almanac",
    display: "Almanac",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/merchandise",
    display: "Merchandise",
  },
  {
    path: "/members",
    display: "Members",
  },
];

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ===== LOGO ====== */}
            <Link to="/home">
              <div className="homelogo">
                <img src={logo} alt="INSIDE LOGO" width="100%" />{" "}
                <p className="text-xl text-white">HITian Inside</p>
              </div>
            </Link>

            {/* ======== menu ======= */}
            <div className="navigation">
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-[#FFB5B5] text-[16px] leading-7 font-[600] "
                          : "text-white text-[16px] leading-7 font-[500] hover:text-[#FFB5B5]"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
