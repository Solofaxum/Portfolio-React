import React from "react";
import { NavLink } from "react-router-dom";
import './icons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function NaveBar() {
    return (
        <header className="bg-red-600">
            <div
                className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive trscking-widest"> Solomon</NavLink>
                    <NavLink to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"> Blog Posts</NavLink>
                    <NavLink to="/projects"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"> Projects</NavLink>
                    <NavLink to="/About"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover text-red-200 hover:text-green-800"> About me</NavLink>
                </nav>
                <div className="social-container">
                    <h3>Social Follow</h3>
                    <a href="https://www.youtube.com/channel/UCNm0ivFgx2ELjb51kD3FSEw"
                        className="youtube social color: #eb3223">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/Solomon.axu/"
                        className="facebook social color: #4968ad">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com/solomong_slasie" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://github.com/Solofaxum"
                        className="instagram social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>

                </div>
            </div>
        </header>
    )
}