import React, { useState, useRef, useLayoutEffect } from "react";
import View3D, { ReadyEvent } from "@egjs/react-view3d";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function skeleton() {
    const scene = useRef<View3D>(null);
    const [load, setLoad] = useState(false);
    // const [speed, setSpeed] = useState(0);

    function handleSpin(pos = 1) {
        const currentPose = scene.current?.camera.currentPose.clone();
        console.log(currentPose);

        if (!currentPose) {
            return;
        }

        // currentPose.yaw = (currentPose.yaw ?? 0) + pos;  // 현재 각도에서 더해주는거
        currentPose.yaw = pos;

        scene.current?.camera.reset(undefined, undefined, currentPose);
    }

    useLayoutEffect(() => {
        ScrollTrigger.create({
            trigger: "#scene-container",
            start: "top top",
            end: "bottom bottom",
            endTrigger: "#scene-container",
            scrub: true,

            onUpdate: (self) => {
                const progress = self.progress;

                handleSpin(progress * 180);
            },
        });

        gsap.from("#head", {
            scrollTrigger: {
                trigger: "#scene-container",
                start: "top top",
                end: "bottom 100",
                endTrigger: "#head",
                scrub: true,
            },
            xPercent: -200,
            opacity: 0,
        });

        gsap.from("#chest", {
            scrollTrigger: {
                trigger: "#scene-container",
                start: "top top",
                end: "bottom center",
                endTrigger: "#chest",
                scrub: true,
            },
            xPercent: 200,
            opacity: 0,
        });

        gsap.from("#waist", {
            scrollTrigger: {
                trigger: "#scene-container",
                start: "top top",
                end: "bottom center",
                endTrigger: "#waist",
                scrub: true,
            },
            xPercent: -200,
            opacity: 0,
        });

        gsap.from("#leg", {
            scrollTrigger: {
                trigger: "#scene-container",
                start: "top top",
                end: "bottom center",
                endTrigger: "#leg",
                scrub: true,
            },
            xPercent: 200,
            opacity: 0,
        });

        gsap.from("#foot", {
            scrollTrigger: {
                trigger: "#scene-container",
                start: "top top",
                end: "bottom center",
                endTrigger: "#foot",
                scrub: true,
            },
            xPercent: -200,
            opacity: 0,
        });
    }, []);

    return (
        <div id="scene-container">
            <h1>Scrolling</h1>
            <p id="head">이건 머리여 💀</p>
            <p id="chest">이건 가슴이여</p>
            <p id="waist">이건 허리여</p>
            <p id="leg">이건 다리여 🦵</p>
            <p id="foot">이건 발이여 🦶</p>
            <View3D
                id="skeleton-scene"
                src="/skeleton/scene.gltf"
                ref={scene}
                background="#000"
                onLoadFinish={() => {
                    setLoad(true);
                }}

                // autoplay={{
                //     speed: speed,
                // }}
            />
            <div className="scene-background">
                {load ? null : "님아 잠만 기달!"}
            </div>
            <Link className="link" to="/">
                어 뒤로가자
            </Link>
        </div>
    );
}

export { skeleton as default };
