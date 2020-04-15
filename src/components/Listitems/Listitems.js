import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as Box } from "../../assets/box.svg";
import { ReactComponent as User } from "../../assets/user-interface.svg";
import FadeIn from "react-fade-in";
const Listitems = () => {
  return (
    <>
      <div className="list-items-wrapper">
        <FadeIn delay={100} transitionDuration={400}>
          <Table
            borderless
            hover
            style={{
              backgroundColor: "white"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f7f7f5" }}>
                <th
                  style={{
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                    fontSize: "14px",
                    color: "#c7c5bf"
                  }}
                >
                  Product
                </th>
                <th></th>
                <th></th>
                <th
                  style={{
                    borderTopRightRadius: "15px",
                    borderBottomRightRadius: "15px",
                    fontSize: "14px",
                    color: "#c7c5bf"
                  }}
                >
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Box />
                </td>
                <td>
                  <div style={{ fontSize: "16px", fontWeight: "600" }}>
                    The Fox 6 Template
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "500",
                      color: "#c7c5bf"
                    }}
                  >
                    Search App
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      paddingTop: "3px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      paddingBottom: "3px",
                      color: "green",
                      background: "white",
                      boxShadow: "1px 7px 15px 0px rgba(0, 0, 0, 0.3)",
                      fontSize: "10px",
                      width: "46px",
                      borderRadius: "10px"
                    }}
                  >
                    + 66.9%
                  </div>
                </td>
                <td>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    $24.00
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <User />
                </td>
                <td>
                  <div style={{ fontSize: "16px", fontWeight: "600" }}>
                    DashBoard InterFace
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "500",
                      color: "#c7c5bf"
                    }}
                  >
                    {" "}
                    Restaurent App
                  </div>
                </td>
                <td></td>
                <td>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    $34.50
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </FadeIn>
      </div>
    </>
  );
};

export default Listitems;
