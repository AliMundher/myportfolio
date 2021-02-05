import React from 'react';
import { Link } from 'react-router-dom';
import Style from "styled-components";
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="container">
                <Link to="/" className="my_link">
                    <div className="logo">
                        <h3 className="text_logo">m</h3>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to='/about' className="nav-link">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/mywork' className="nav-link">my work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cv' className="nav-link">cV</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">contact</Link>
                        </li>

                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Nav;
