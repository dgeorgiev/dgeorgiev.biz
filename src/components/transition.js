import React from "react";
import {
    TransitionGroup,
    Transition as ReactTransition
} from "react-transition-group";

//This variable will be responsible for our animation duration
const timeout = 200;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
    entering: {
        width: "100%",
        position: "absolute",
        opacity: 0,
        transform: `translateY(-100%)`
    },
    entered: {
        width: "100%",
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 1,
        transform: `translateY(0%)`
    },
    exiting: {
        width: "100%",
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0,
        transform: `translateY(100%)`
    }
};

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props;

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout
                    }}
                >
                    {status => (
                        <div
                            style={{
                                ...getTransitionStyles[status]
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        );
    }
}

export default Transition;
