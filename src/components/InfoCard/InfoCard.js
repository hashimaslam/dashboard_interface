import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
const InfoCard = () => {
  return (
    <>
      <div className="info-card-container">
        <div className="info-card-recent">
          <FontAwesomeIcon
            icon={faHistory}
            style={{ color: "#ce94af" }}
            size="2x"
          />
        </div>
        <div className="info-card-infoWrapper">
          <div className="info-card-primaryInfo">Renew Your Pro Account</div>
          <div style={{ fontSize: "12px", color: "#60608f" }}>
            $99.00 for additional charges
          </div>
        </div>
        <div className="info-renew-btn">
          <div className="info-btn-text">Renew Account</div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
