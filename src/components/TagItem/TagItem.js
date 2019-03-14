import React from 'react';
import { Link } from 'gatsby';
import { FaFolderOpen } from 'react-icons/fa';
import './TagItem.css';

const TagItem = props => {
  return (
    <span style={{ marginLeft: '1rem' }}>
      <FaFolderOpen className="post-type-icon" />
      <span className="tag-item">
        <Link to={props.tagLink}>{props.tagName}</Link>
      </span>
    </span>
  );
};

export default TagItem;
