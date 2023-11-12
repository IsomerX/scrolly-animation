/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./page.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
    const imageRef = useRef(null);
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

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
                markers: true,
            },
            id: "imag2",
        });
        timeline.fromTo(
            imageRef.current,
            {
                clipPath: "inset(30%)",
            },
            {
                clipPath: "inset(0%)",
            }
        );
    }, []);

    return (
        <div
            className="wrapper"
            style={{
                height: "500vh",
            }}
        >
            <div style={{ height: "100vh" }}></div>
            <img
                src="/image.jpg"
                alt="mountains"
                className={styles.image}
                ref={imageRef}
            />
        </div>
    );
}

