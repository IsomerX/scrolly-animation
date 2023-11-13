/* eslint-disable @next/next/no-img-element */
"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./page.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";

export default function Home() {
    const imageRef = useRef(null);
    // useEffect(() => {
    //     (async () => {
    //         const LocomotiveScroll = (await import("locomotive-scroll"))
    //             .default;

    //         const locomotiveScroll = new LocomotiveScroll();
    //     })();
    // }, []);

    // Define the animation timeline
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
                pin: true,
            },
            id: "imag2",
        });
        timeline.fromTo(
            imageRef.current,
            {
                opacity: 0,
                clipPath: "inset(30%)",
            },
            {
                opacity: 1,
                clipPath: "inset(0%)",
            }
        );
        timeline.fromTo(
            "#heading",
            {
                opacity: 0.1,
            },
            {
                opacity: 1,
            },
            0
        );
        timeline.fromTo(
            "#subheading",
            {
                opacity: 0.8,
            },
            {
                opacity: 0,
            },
            0
        );
    }, []);

    return (
        <>
            <div className="wrapper">
                <div style={{ height: "30vh" }}></div>
                <div className={styles.headingWrapper} id="headingWrapper">
                    <div className={styles.heading} id="heading">
                        SOME HEADING LOL
                    </div>
                    <div className={styles.subheading} id="subheading">
                        scroll slowly...
                    </div>
                </div>
                <img
                    src="/image.jpg"
                    alt="mountains"
                    className={styles.image}
                    ref={imageRef}
                />
            </div>
            <Footer />
        </>
    );
}

