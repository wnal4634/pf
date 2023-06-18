import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)",
    });

    return <>{isMobile && children}</>;
};

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)",
    });

    return <>{isTablet && children}</>;
};

const PC = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)",
    });

    return <>{isPc && children}</>;
};

export { Mobile, Tablet, PC };
