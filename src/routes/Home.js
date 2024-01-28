import React from "react";
import Middle from "components/Middle";
import Top from "components/Top";
import Reserve from "components/Reserve";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
    return (
        <div>
            {/* <AnimatedCursor
                trailingSpeed={1}
                innerSize={7}
                outerSize={50}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: "2px solid var(--cursor-color)",
                }}
                innerStyle={{
                    backgroundColor: "var(--cursor-color)",
                }}
                clickables={[
                    "a",
                    "span",
                    "button",
                    {
                        target: ".custom",
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: "255, 255, 255",
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5,
                        },
                    },
                ]}
            /> */}
            <Top />
            <div>
                <Middle />
            </div>
            <Reserve />
            <div />
        </div>
    );
};

export default Home;
