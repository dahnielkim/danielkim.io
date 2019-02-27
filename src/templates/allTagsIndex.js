import React from "react";
import { Link } from "gatsby";

// data => for queries
// context => for context
const AllTagsTemplate = ({ pageContext }) => {
    const { tags } = pageContext;

    return (
        <div>
            <div>
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/tags/${tagName}`}>{tagName}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AllTagsTemplate;
