import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <nav>
            <ul>
                <Link to="/">
                    <li
                        className={
                            props.pathName === "/" ? "active" : "inactive"
                        }
                    >
                        Blog Home
                    </li>
                </Link>

                <Link to="/portfolio">
                    <li
                        className={
                            props.pathName === "/portfolio"
                                ? "active"
                                : "inactive"
                        }
                    >
                        Portfolio
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
);

export default Navbar;
