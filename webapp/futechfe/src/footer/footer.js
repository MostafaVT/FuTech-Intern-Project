import React from "react";
import "./footer.css";
import futechlogo from "../assets/futech-logo.png";
import linkedin from "../assets/linkedin-icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>About Us</h4>
            <p>
              Our system stores the message log data in an MS SQL Server
              database, ensuring reliable and scalable storage for your
              monitoring needs. The use of MS SQL Server guarantees high
              performance and seamless integration with the backend
              infrastructure.
            </p>
            <a href="/info2">
              <p>info2</p>
            </a>
            <a href="/info3">
              <p>info3</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>info4</h4>
            <a href="/info5">
              <p>info5</p>
            </a>
            <a href="/info6">
              <p>info6</p>
            </a>
            <a href="/info7">
              <p>info7</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>info8</h4>
            <a href="/info9">
              <p>info9</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>info10</h4>
            <a href="/info11">
              <p>info11</p>
            </a>
            <a href="/info12">
              <p>info12</p>
            </a>
            <a href="/info13">
              <p>info14</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Contact Us</h4>
            <div className="socialmedia">
              <p>
                <img src={linkedin} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} FuTech Systems. All right reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
