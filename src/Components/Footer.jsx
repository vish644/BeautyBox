import React from "react";
import FCard from "./FCard";
import "./Footer.css";

function Footer({title}) {
  return (
    <div className="mainfooter">
      <div className="fbody">
        <div className="footer">
          <FCard title="Customer Info" />
          <FCard title="Company Support" />
          <FCard title="Privacy Policy" />

          <div className="footer_r">
            <h4 className="h2">Subscribe</h4>
            <p className="p">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="inputfield">
              <input
                type="text"
                placeholder="Enter your email"
                className="finput"
              />
              <button style={{ padding: "10px" }}>Subscribe</button>
            </div>

            <p className="p2">
              By subscribing you agree with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="footer_l">
          <div className="footerbl">
            <p>2023 All rights reserved.</p>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies Settings</a>
          </div>
          <div className="footerlinks">
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
