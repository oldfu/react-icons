
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaHSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m31.6 30v-20q0-0.6-0.5-1t-1-0.4h-2.8q-0.6 0-1 0.4t-0.4 1v7.1h-11.5v-7.1q0-0.6-0.4-1t-1-0.4h-2.9q-0.5 0-1 0.4t-0.4 1v20q0 0.6 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-7.1h11.5v7.1q0 0.6 0.4 1t1 0.4h2.8q0.6 0 1-0.4t0.5-1z m5.7-20.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"/></g>
            </IconBase>
        );
    }
}