import React from "react";
import "./Events.css";



const events = [
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Navroopam",
    date: "18/08/23",
  },
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Deepdarpan",
    date: "18/08/23",
  },
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Extravaganza",
    date: "18/08/23",
  },
];

function Events() {
  return (
    <>
      <div className="events-home">
        <h1 className="event-heading">EVENTS</h1>
        <div className="events-list">
          <div className="Events-cards grid grid-cols-3 gap-5">
            {events.map((event, index) => (
              <a href="https://www.google.com" target="_blank" class="event-card max-w-3/4 rounded-lg overflow-hidden shadow-2xl content-center">
                <img
                  src={event.img_url}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-base mb-2 text-white">
                    NAME: {event.name}
                  </div>
                  <div class="font-bold text-base mb-2 text-white">
                    DATE: {event.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
