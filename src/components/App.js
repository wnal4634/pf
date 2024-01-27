import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import "css/App.css";

function App() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        let progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        };

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <>
            <div id="progressBarContainer">
                <div
                    id="progressBar"
                    style={{
                        transform: `scale(1, ${scroll})`,
                        opacity: 1,
                        // opacity: `${scroll}`,
                    }}
                />
            </div>

            <AppRouter />
        </>
    );
}

export default App;
