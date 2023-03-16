import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const $section = useRef();

    useLayoutEffect(() => {
        gsap.to("#zoomIn", {
            scrollTrigger: {
                trigger: "#section1",
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
            yPercent: 50,
            scale: 3,
            opacity: 0,
        });

        gsap.from("#zoomOut", {
            scrollTrigger: {
                trigger: "#section2",
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
            yPercent: 50,
            scale: 3,
            opacity: 0,
        });

        gsap.to("#rotate", {
            scrollTrigger: {
                trigger: "#section3",
                start: "-200",
                end: "bottom bottom",
                scrub: true,
            },
            rotate: 360,
            scale: 2,
        });
    }, []);

    return (
        <div>
            <section id="section1">
                <h1 id="zoomIn">어서오고</h1>
            </section>
            <section id="section2">
                <h1 id="zoomOut">어서가고</h1>
            </section>
            <section id="section3">
                <h1 id="rotate">돌아가용</h1>
            </section>
        </div>
    );
}

export default App;
