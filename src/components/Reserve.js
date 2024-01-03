import React, { useState, useEffect } from "react";
import styles from "css/Reserve.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const Reserve = () => {
    const [showButton, setShowButton] = useState(false);
    const year = new Date();

    const scrollToTop = () => {
        window.scroll({
            top: 0,
        });
    };

    useEffect(() => {
        const ShowButtonClick = () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", ShowButtonClick);
        return () => {
            window.removeEventListener("scroll", ShowButtonClick);
        };
    }, []);

    return (
        <>
            <div className={styles.reserve_wrap}>
                <div>©{year.getFullYear()} KimJuMi. All Rights Reserved.</div>
                {showButton && (
                    <>
                        <FontAwesomeIcon
                            icon={faCircleChevronUp}
                            size="2x"
                            onClick={scrollToTop}
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default Reserve;
