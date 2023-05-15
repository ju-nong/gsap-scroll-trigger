import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Horizon } from "./Horizon";

function Intro() {
    function punch(text: string) {
        alert(text);
    }

    useLayoutEffect(() => {
        gsap.to("#zoom-in", {
            scrollTrigger: {
                trigger: "#section1",
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
            yPercent: -200,
            scale: 3,
            opacity: 0,
        });

        gsap.from("#left-punch", {
            scrollTrigger: {
                trigger: "#section2",
                start: "top top",
                end: "100",
                scrub: 1,
            },
            xPercent: "-200",
            opacity: 0,
        });

        gsap.from("#right-punch", {
            scrollTrigger: {
                trigger: "#section3",
                start: "top top",
                end: "100",
                scrub: 1,
            },
            xPercent: "200",
            opacity: 0,
        });

        // ScrollTrigger.create({
        //     trigger: "#fixed",
        //     start: "top top",
        //     end: "bottom center",
        //     endTrigger: "#section2",
        //     scrub: true,
        //     onUpdate: (self) => {
        //         console.log("update", self);
        //     },
        // });

        gsap.to("#rotate", {
            scrollTrigger: {
                trigger: "#section4",
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
            rotate: 360,
            scale: 2,
        });

        gsap.to("#rotate", {
            scrollTrigger: {
                trigger: "#section4",
                start: "-200",
                end: "200",
                scrub: true,
            },
            rotate: 360,
            scale: 2,
        });

        gsap.from("#zoom-out", {
            scrollTrigger: {
                trigger: "#section5",
                start: "-400",
                end: "bottom center",
                scrub: true,
            },
            yPercent: 200,
            scale: 3,
            opacity: 0,
        });
    }, []);

    return (
        <div className="intro-container">
            <section id="section1">
                <h1 id="zoom-in">어서오고</h1>
            </section>

            <section id="section2">
                <img
                    id="left-punch"
                    src="images/punch_left.jpg"
                    alt="잼민레프트펀치"
                    onClick={() => punch("레프트 펀치!")}
                />
            </section>
            <section id="section3">
                <img
                    id="right-punch"
                    src="images/punch_right.jpg"
                    alt="잼민펀치라이트펀치"
                    onClick={() => punch("라이트 펀치!")}
                />
            </section>
            <section id="section4">
                <h1 id="rotate">돌아가용</h1>
            </section>
            <Horizon />
            <section id="section5">
                <h1 id="zoom-out">어서가고</h1>
            </section>
            <Link to="/skeleton" className="link">
                💀 ⬅️ Click me!
            </Link>
        </div>
    );
}

export { Intro as default };
