import React from "react";
import { Link } from "gatsby";

import { formatPostDate } from "../utils/helpers";

import Header from "../components/Header";
import Footer from "../components/Footer";

const SingleTagsTemplate = props => {
    const { location, pageContext } = props;
    const { posts, tagName } = pageContext;

    return (
        <div>
            <Header location={location} />

            <div className="body-content">
                Posts about {`${tagName}`}:
                <div>
                    <ul>
                        {posts.map((post, index) => {
                            console.log(post, "post");
                            return (
                                <li key={index}>
                                    <Link to={post.frontmatter.path}>
                                        {post.frontmatter.title} - (
                                        {formatPostDate(
                                            post.frontmatter.date,
                                            "en"
                                        )}
                                        )
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SingleTagsTemplate;
