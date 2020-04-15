import React from "react";
import { ReactComponent as ProfileLogo } from "../../assets/boy.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import FadeIn from "react-fade-in";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Dots } from "../../assets/dots.svg";
const SideBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <section className="side-bar-wrapper mx-2">
          <div className="sidebar-title-conatiner mt-lg-5">
            <div className="sidebar-primary-title">Interface</div>
            <div className="sidebar-logo-container logo-hide">
              <div className="sidebar-primary-logo">
                <Dots />
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <div className="sidebar-logo-container">
                <div className="sidebar-primary-logo">
                  <Dots />
                </div>
              </div>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div className="sidebar-main-conatiner mt-lg-5 ">
                <FadeIn delay={50} transitionDuration={400}>
                  <ul>
                    <li>
                      <div className="sidebar-menu-wrapper pr-4 pl-3">
                        <div className="sidebar-menu-icon">
                          <FontAwesomeIcon
                            icon={faColumns}
                            style={{
                              color: "1c1c58"
                            }}
                            size="lg"
                          />
                        </div>
                        <div className="sidebar-menu-info ml-3">Dashboard</div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-menu-wrapper pr-4 pl-3">
                        <div className="sidebar-menu-icon">
                          <ProfileLogo />
                        </div>
                        <div className="sidebar-menu-info ml-3">Profile</div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-menu-wrapper pr-4 pl-3">
                        <div className="sidebar-menu-icon">
                          <Settings />
                        </div>
                        <div className="sidebar-menu-info ml-3">Settings</div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-menu-wrapper pr-4 pl-3">
                        <div className="sidebar-menu-icon">
                          <FontAwesomeIcon
                            icon={faCloudDownloadAlt}
                            style={{
                              color: "1c1c58"
                            }}
                            size="lg"
                          />
                        </div>
                        <div className="sidebar-menu-info ml-3">Cloud</div>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-menu-wrapper pr-4 pl-3">
                        <div className="sidebar-menu-icon">
                          <FontAwesomeIcon
                            icon={faCommentAlt}
                            style={{
                              color: "1c1c58"
                            }}
                            size="lg"
                          />
                        </div>
                        <div className="sidebar-menu-info ml-3">
                          Notifications
                        </div>
                      </div>
                    </li>
                  </ul>
                  <section className="sidebar-addnew-wrapper">
                    <div className="addnew-btn-conatiner">
                      <div className="addnew-btn">+</div>
                      <div className="addnew-btn-info">New item</div>
                    </div>
                    <div className="addnew-btn-down">
                      ctrl '+ to create new item'
                    </div>
                  </section>
                </FadeIn>
              </div>
            </Nav>
          </Navbar.Collapse>
        </section>
      </Navbar>
    </>
  );
};

export default SideBar;
