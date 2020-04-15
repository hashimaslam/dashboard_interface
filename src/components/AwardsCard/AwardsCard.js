import React from "react";
import { ReactComponent as SunRise } from "../../assets/rise.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
const AwardsCard = props => {
  return (
    <>
      <div
        className={
          props.svg1 ? "awards-card-container" : "awards-card-container2"
        }
      >
        <div className="awards-card-icon mt-sm-2">
          <div className="awards-card-icon-wrapper">
            {props.svg1 ? (
              <SunRise />
            ) : (
              <FontAwesomeIcon
                icon={faReact}
                style={{
                  color: "#1c1c58"
                }}
                size="2x"
              />
            )}
          </div>
        </div>
        <div className="awards-card-info mt-sm-2">
          <div className="awards-card-details ml-lg-3">
            <div style={{ fontSize: "18px", margin: "0px", fontWeight: "600" }}>
              {props.price}
            </div>
            <div style={{ fontSize: "10px", color: "#c7c5bf" }}>
              {props.info}
            </div>
          </div>
        </div>
        <div className="awards-card-btn ml-lg-3">
          {props.svg1 ? (
            <div
              style={{
                backgroundColor: "#f7f7f5",
                height: "60px",
                width: "30px",
                borderRadius: "10px"
              }}
            ></div>
          ) : (
            <div
              style={{
                backgroundColor: "#7376aa",
                height: "60px",
                width: "30px",
                borderRadius: "10px"
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};
export default AwardsCard;
