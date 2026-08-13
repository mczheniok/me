"use client"

import { useEffect, useRef } from "react";

export function ShoradoLogoAnimatedComponent({
    width = "36",
    height = "36",
    speed = 40,           
    meridianCount = 3,    
    hoverOnly = false,    
    className,
}) {
    const rightRefs = useRef([]);
    const leftRefs = useRef([]);
    const rafRef = useRef(null);
    const angleRef = useRef(0);
    const lastTimeRef = useRef(null);
    const activeRef = useRef(!hoverOnly);
    const reducedMotionRef = useRef(false);

    const R = 4.2;
    const step = 360 / meridianCount;

    const buildArc = (rx, bulgeRight) => {
        const sweep = bulgeRight ? 1 : 0;
        return `M12,2.5 A${rx.toFixed(3)},9.5 0 0,${sweep} 12,21.5`;
    };

    const applyFrame = (alphaOffsetsOnly) => {
        for (let i = 0; i < meridianCount; i++) {
            const alphaDeg = angleRef.current + i * step;
            const alpha = (alphaDeg * Math.PI) / 180;
            const cos = Math.cos(alpha);
            const rx = Math.max(0.08, Math.abs(R * cos));

            const frontness = Math.sin(2 * alpha);

            const rightOpacity = 0.65 + 0.35 * frontness;
            const leftOpacity = 0.65 - 0.35 * frontness;
            const rightWidth = 1.25 + 0.15 * frontness;
            const leftWidth = 1.25 - 0.15 * frontness;

            const rightEl = rightRefs.current[i];
            const leftEl = leftRefs.current[i];

            if (rightEl) {
                rightEl.setAttribute("d", buildArc(rx, true));
                rightEl.setAttribute("opacity", rightOpacity.toFixed(3));
                rightEl.setAttribute("stroke-width", rightWidth.toFixed(3));
            }
            if (leftEl) {
                leftEl.setAttribute("d", buildArc(rx, false));
                leftEl.setAttribute("opacity", leftOpacity.toFixed(3));
                leftEl.setAttribute("stroke-width", leftWidth.toFixed(3));
            }
        }
    };

    const applyStaticPose = () => {
        angleRef.current = 0;
        applyFrame();
    };

    useEffect(() => {
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        reducedMotionRef.current = mql.matches;
        const handleChange = (e) => {
            reducedMotionRef.current = e.matches;
            if (e.matches) applyStaticPose();
        };
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (reducedMotionRef.current) {
            applyStaticPose();
            return;
        }

        let visible = true;
        const handleVisibility = () => {
            visible = document.visibilityState === "visible";
            lastTimeRef.current = null;
        };
        document.addEventListener("visibilitychange", handleVisibility);

        const tick = (now) => {
            rafRef.current = requestAnimationFrame(tick);

            if (!visible || !activeRef.current) {
                lastTimeRef.current = null;
                return;
            }
            if (lastTimeRef.current === null) {
                lastTimeRef.current = now;
                return;
            }

            const dt = (now - lastTimeRef.current) / 1000;
            lastTimeRef.current = now;
            angleRef.current = (angleRef.current + dt * speed) % 360;

            applyFrame();
        };

        if (hoverOnly) applyStaticPose();
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafRef.current);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speed, meridianCount, hoverOnly]);

    const handleMouseEnter = () => {
        if (!hoverOnly) return;
        activeRef.current = true;
    };
    const handleMouseLeave = () => {
        if (!hoverOnly) return;
        activeRef.current = false;
        lastTimeRef.current = null;
        applyStaticPose();
    };

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="img"
            aria-label="Shorado"
        >
            <circle cx="12" cy="12" r="9.5" />
            {Array.from({ length: meridianCount }, (_, i) => (
                <g key={i}>
                    <path ref={(el) => (rightRefs.current[i] = el)} d={buildArc(R, true)} />
                    <path ref={(el) => (leftRefs.current[i] = el)} d={buildArc(R, false)} />
                </g>
            ))}
            <line x1="2.5" y1="12" x2="21.5" y2="12" />
            <path d="M4 7.5c2 1 14 1 16 0" />
            <path d="M4 16.5c2-1 14-1 16 0" />
        </svg>
    );
}