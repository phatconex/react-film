import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer-last">
            <Container>
                <div className="menu d-flex align-items-center">
                    <img src="/img/logo.svg" alt="" />
                    <ul className="menu-footer d-flex align-items-center">
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="list-movie" id="movie">
                                MOVIES
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="body-footer d-flex align-items-center">
                    <p className="coder mb-0">
                        © 2023 <span className="coder-color">Filmlane</span>.All Rights Reserved by <span className="coder-color">Tan Phat</span>
                    </p>
                    <div className="social">
                        <a href="">
                            <i className="fa-brands fa-facebook"></i>{" "}
                        </a>
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
