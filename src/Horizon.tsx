import { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function Horizon() {
    const [colors, setColors] = useState(["red", "orange", "yellow", "green"]);
    const horizion = useRef<HTMLUListElement>(null);

    useLayoutEffect(() => {
        const containerWidth = horizion.current?.scrollWidth || 0;
        gsap.to("#horizion", {
            x: `-${containerWidth - window.innerWidth}px`,
            smoothOrigin: false,
            scrollTrigger: {
                trigger: "#horizion",
                pin: true,
                scrub: 1,
                end: () => `+=${containerWidth - window.innerWidth}`,
            },
        });
    }, [horizion]);

    return (
        <ul className="horizon-container" id="horizion" ref={horizion}>
            {colors.map((color, index) => (
                <li
                    style={{ "--bg-color": color } as React.CSSProperties}
                    key={index}
                >
                    {index + 1}
                </li>
            ))}
        </ul>
    );
}

export { Horizon };
