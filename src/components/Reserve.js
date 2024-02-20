import React, { useState, useEffect } from "react";
import styles from "css/Reserve.module.scss";
import { SiTistory, SiGithub, SiGmail } from "react-icons/si";
import link from "components/Link";

const Reserve = () => {
    const year = new Date();

    const scrollToTop = () => {
        window.scroll({
            top: 0,
        });
    };

    return (
        <>
            <div id="4" className={styles.reserve}>
                <div className={styles.reserve_wrap}>
                    <div className={styles.contact_title}>Contact</div>
                    <div className={styles.contact_url}>
                        <a className={styles.url} href={link.mail}>
                            <div>Mail</div>
                        </a>
                        <a
                            className={styles.url}
                            onClick={() => {
                                window.open(link.github);
                            }}
                        >
                            <div>Github</div>
                        </a>
                        <a
                            className={styles.url}
                            onClick={() => {
                                window.open(link.blog);
                            }}
                        >
                            <div>Blog</div>
                        </a>
                    </div>
                    <div className={styles.reserve_n_top}>
                        <div>
                            ©{year.getFullYear()} KimJuMi. All Rights Reserved.
                        </div>
                        <a onClick={scrollToTop}>Back to top</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reserve;
