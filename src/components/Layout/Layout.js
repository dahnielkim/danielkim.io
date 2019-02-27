import React, { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";
import SEO from "../SEO";

class Layout extends React.Component {
    render() {
        return (
            <Fragment>
                <SEO
                    lang={this.props.lang}
                    title={this.props.seoTitle}
                    description={this.props.seoDesc}
                    slug={this.props.seoSlug}
                />

                <Header location={this.props.location} />

                {this.props.children}

                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
