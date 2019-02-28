import React from "react";
import "./Pagination.css";

const Pagination = props => (
    <button
        className="blog-pagination"
        key={props.id}
        href="#"
        id={props.id}
        onClick={props.handleClick}
    >
        {props.number}
    </button>
);

export default Pagination;
