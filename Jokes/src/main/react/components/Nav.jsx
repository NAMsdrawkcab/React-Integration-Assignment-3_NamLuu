import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//functional component
const Nav = (props) => {
    const {locationUrl} = props;
    const pageUrls = [
        {
            url: "/",
            label: "Home"
        },
        {
            url: "/types",
            label: "Joke Types"
        }
        //{
            //url: "/pastComic",
            //label: "Past Comic"
        //}
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {pageUrls.map((linkInfo, index) => {
                            return(
                                <li key={index} className="nav-item">
                                    <NavLink 
                                        to={linkInfo.url} 
                                        className={isActive =>
                                            "nav-link" + (isActive ? " active" : "")
                                        }
                                    >
                                        {linkInfo.label}
                                    </NavLink>
                                    {/*<a className={`nav-link ${locationUrl === linkInfo.url ? "active" : ""}`} aria-current="page" href={linkInfo.url}>
                                        {linkInfo.label}
                                    </a>*/}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav