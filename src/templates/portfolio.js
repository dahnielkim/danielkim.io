import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = props => {
    const { location } = props;

    return (
        <div>
            <Header location={location} />

            <div className="body-content">
                My portfolio is currently under construction... Tinker tinker...
            </div>

            <Footer />
        </div>
    );
};

export default Portfolio;
