import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function ParentCounter() {
    return (
        <div className="counter-section">
            <HoverCounter />
            <ClickCounter />
        </div>
    )
}

export default ParentCounter;
