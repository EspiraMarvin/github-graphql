import React from 'react';

const Tag = ({name}) => {
    return (
        <div className="tag-list">
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default Tag;
