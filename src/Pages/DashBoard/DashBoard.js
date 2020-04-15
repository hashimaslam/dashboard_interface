import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import InfoCard from "../../components/InfoCard/InfoCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import PriceCard from "../../components/PriceCard/PriceCard";
import AwardsCard from "../../components/AwardsCard/AwardsCard";
import Listitems from "../../components/Listitems/Listitems";
import SideBar from "../../components/SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

import logo_1 from "../../assets/logo_1.png";
import * as dashboard from "../../assets/dashboard.json";
import Lottie from "react-lottie";

const DashBoard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dashboard.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            {/* side bar conatiner starts here */}
            <Col lg={2} py-3 px-5>
              <SideBar />
            </Col>
            {/* sidebar conatiner ends here */}

            {/* middle conatiner starts here */}
            <Col lg={5} className="dashboard-main1 px-lg-5 py-5">
              <section className="primary-heading-wrapper mt-3 mb-5">
                <div className="primary-heading ">Hello Tam</div>
                <div className="heading-secondary text-muted">
                  Have a nice day at work
                </div>
              </section>
              <section className="switch-menu">
                <SwitchButton />
                <div className="menu-dots-wrapper">
                  <div className="menu-dots">...</div>
                </div>
              </section>
              <div className="svg-wrapper mt-4">
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
              <InfoCard />
            </Col>
            {/* middle conatiner ends here */}

            {/* end conatiner starts here */}
            <Col lg={5} className="dashboard-main2">
              <Container fluid className="mt-5">
                <Row>
                  <Col xs={5}>
                    <SearchBar />
                  </Col>
                  <Col xs={3}>
                    <div className="notification-icon">
                      <FontAwesomeIcon
                        icon={faCommentAlt}
                        style={{
                          color: "#1c1c58",
                          marginRight: "0px !important"
                        }}
                        className="ml-5"
                        size="lg"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <img
                      src={logo_1}
                      alt="logo"
                      style={{
                        width: "40px",
                        height: "40px",
                        right: "0"
                      }}
                      className="ml-5"
                    />
                  </Col>
                </Row>
              </Container>
              <section className="earnings-info-conatiner mt-5 ml-3">
                <div className="heading-tertiary">Your Earnings</div>
                <div className="mr-5 pr-2 mt-3">
                  <PriceCard />
                </div>
              </section>
              <section className="earnings-info-conatiner mt-5 ml-lg-3">
                <div className="mr-lg-5 pr-2 mt-3">
                  <div className="d-flex flex-row justify-content-sm-between awards-card-main-wrapper">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="heading-tertiary mb-sm-3">
                        Your Best Month
                      </div>
                      <AwardsCard
                        svg1={true}
                        price={"$24.00"}
                        info={"February"}
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-start">
                      <div className="heading-tertiary mb-sm-3">
                        Your Best App
                      </div>
                      <AwardsCard
                        svg1={false}
                        price={"$124.00"}
                        info={"React APP"}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="earnings-info-conatiner mt-5 ml-3">
                <div className="heading-tertiary">Your Top Item</div>
                <div className="items-list-container mr-lg-5 mt-3 mb-5">
                  <Listitems />
                </div>
              </section>
            </Col>
            {/* end conatiner ends here */}
          </Row>
        </Container>
      </main>
    </>
  );
};
export default DashBoard;
