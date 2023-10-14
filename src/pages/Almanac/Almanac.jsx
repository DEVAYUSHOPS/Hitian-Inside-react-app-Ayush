import React from "react";
import "./almanac.css";
import almanac_img from "../../assets/images/almanac-vector.png";
import almanac_background from "../../assets/images/almanac-img.png";

const almanacs = [
  {
    img_url: almanac_img,
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url:almanac_img,
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
];

function Almanac() {
  return (
    <>
      {/* ======== Almanac Section ========= */}

      <div className="Almanac-home">
        <div className="home-contents">
          <h1>Almanac</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nesciunt recusandae mollitia sed ex repellendus aliquam! Iusto
            voluptatibus ad alias hic eveniet, laborum voluptates explicabo quae
            odio. Possimus, libero dolore.
          </p>
          <button type="submit">Submit Here</button>
        </div>
        <img src={almanac_img} alt="IMAGE" />
      </div>
      <div className="Almanac-section flex justify-center">
        <img src={almanac_background} alt="" className="backgrounds" />
        <div className="Almanac-cards grid grid-cols-4 gap-5">
          {almanacs.map((almanac, index) => (
            <div class="Almanac-card max-w-3/4 rounded-lg overflow-hidden shadow-2xl ">
              <img
                class="w-4/5"
                src={almanac.img_url}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-base mb-2 text-white">NAME: {almanac.name}</div>
                <div class="font-bold text-base mb-2 text-white">ROLL: {almanac.roll}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Almanac;
