import React from "react";
import ReactDOM from "react-dom";

class Svg extends React.Component {
    state = {
        x: 0,
        y: 0,
    };
    componentDidMount() {
        this.mounted = true;
        this.tick();
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    tick = () => {
        const time = Date.now() / -1000;
        this.setState({
            x: 150 + 100 * Math.sin(time),
            y: 150 + 100 * Math.cos(time),
        });
        if (this.mounted) {
            requestAnimationFrame(this.tick);
        }
    };
    render() {
        const { x, y } = this.state;
        return (
            <svg width="300" height="300">
                {/* center */}
                <circle r="5" cx={x} cy={y} fill="skyblue" />
            </svg>
        );
    }
}

export default Svg;
