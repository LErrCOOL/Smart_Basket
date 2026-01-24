import React from "react";
import {Heart} from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-bg {
          background-color: black;
          padding: 20px 0;
        }
        .footer-icons a {
          color: white !important;
          margin: 0 15px;
          font-size: 28px;
          transition: 0.3s;
        }
        .footer-icons a:hover {
          color: #00acee; /* highlight color on hover */
        }
      `}</style>

      <footer className="footer-bg mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-4 footer-icons">
          <div className="col-md-6">

            {/* GitHub */}
            <a
              href="https://github.com/SANTHOSHRAJ29"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>

            {/* Mail */}
            <a href="mailto:santhoshraj565758@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <div className="text-white mt-4">
              <p className="small mb-1">© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
              <p>Made with <Heart size={14} className="heart-icon" aria-hidden="true"/> for a more accessible web Designed & Developed by Santhosh Raj</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;