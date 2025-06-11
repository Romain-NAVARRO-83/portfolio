

import React from 'react';

const Triangle: React.FC = () => {
    return (
        <svg className="triangle1" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100" fill="#333333" />
        </svg>
    );
};

export default Triangle;