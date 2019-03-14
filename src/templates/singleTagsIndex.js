import React from "react";
import { Link } from "gatsby";
import SiteLayout from "../components/SiteLayout";
import { formatPostDate } from "../utils/helpers";

const SingleTagsTemplate = props => {
    const { location, pageContext } = props;
    const { posts, tagName } = pageContext;
    const seoDesc = `Posts by DANIELKIM.IO about ${tagName}`;

    return (
        <div>
            <SiteLayout
                lang="en"
                seoTitle={tagName}
                seoDesc={seoDesc}
                seoSlug={location.pathname}
                location={location}
            >
                <div className="body-content">
                    Posts about {`${tagName}`}:
                    <div>
                        <ul>
                            {posts.map((post, index) => {
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
            </SiteLayout>
        </div>
    );
};

export default SingleTagsTemplate;
