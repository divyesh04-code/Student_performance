import React from "react";

function Map() {
  return (
    <div className="map-container">
      <iframe
        title="Adajan Surat Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.52855268106!2d72.7861404068274!3d21.19684053791537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c351ceae251%3A0x1d35b30f855a2c36!2sAdajan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1778154811222!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;