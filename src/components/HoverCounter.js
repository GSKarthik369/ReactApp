import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;

        return (
            <React.Fragment>
                <h1 className="counter-hover-heading" onMouseOver={incrementCount}>
                    Hover over heading for { count } times
                </h1>
            </React.Fragment>
        );
    }
}

export default withCounter(HoverCounter);
