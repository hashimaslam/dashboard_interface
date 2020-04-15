import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/card_svg.json";
import { ReactComponent as Line1 } from "../../assets/minus.svg";
import { ReactComponent as Line2 } from "../../assets/minus2.svg";
import { useMediaQuery } from "react-responsive";

const PriceCard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 600px)"
  });
  return (
    <>
      <div className="price-card-container">
        <div className="price-card-icon">
          {isTabletOrMobileDevice ? (
            <Lottie
              options={defaultOptions}
              className="lottie-file"
              width={100}
              height={100}
            />
          ) : (
            <Lottie
              options={defaultOptions}
              className="lottie-file"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="price-card-info px-lg-4 mx-lg-3 py-lg-4">
          <div className="price-card-rate">
            <p
              style={{
                fontSize: "11px",
                display: "inline-block",
                marginRight: "3px",
                transform: "translateY(-15px)",
                fontWeight: "500"
              }}
            >
              $
            </p>
            <span style={{ fontSize: "30px", fontWeight: "400" }}>98.00</span>
            <div className="mb-3 mt-2">
              <span>
                {" "}
                <Line1 />{" "}
                <span
                  style={{
                    fontSize: "15px",
                    color: "#c7c5bf",
                    marginLeft: "10px"
                  }}
                >
                  Graphics
                </span>
              </span>
            </div>
            <div>
              <span>
                {" "}
                <Line2 />{" "}
                <span className="small-info">
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#c7c5bf",
                      marginLeft: "10px"
                    }}
                  >
                    Interface
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="price-card-btn">
          <div className="price-card-btn1"></div>
          <div className="price-card-btn2"></div>
        </div>
      </div>
    </>
  );
};
export default PriceCard;
