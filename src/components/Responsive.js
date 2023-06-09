import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)",
    });

    return <>{isMobile && children}</>;
};

// const Tablet = ({ children }) => {
//     const isTablet = useMediaQuery({
//         query: "(min-width:768px) and (max-width:1023px)",
//     });

//     return <>{isTablet && children}</>;
// };

const PC = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:768px)",
    });

    return <>{isPc && children}</>;
};

export { Mobile, PC };

// @media screen and (min-width:1024px) {
//     /* 데탑 */
// }
// @media screen and (min-width:768px) and (max-width:1023px) {
//     /* 타블렛 */
// }
// @media screen and (max-width: 767px) {
//     /* 모바일 */
// }

// @media screen and (min-width:768px) {
//     /* 데탑, 타블렛 같이 */
// }

// @media screen and (max-width:1023px) {
//     /* 타블렛, 모바일 같이 */
// }
