"use client"
import { useEffect, useState } from "react"

export function LocationMouseCords() {
    const [cords, setCords] = useState({x: 0, y: 0});
    
    useEffect(() => {
        const onMouseMove = (e) => {
            setCords({x: e.x, y: e.y});
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            setCords({x: 0, y: 0});
        };
    }, []);

    return (
        <span
            className="text-text font-mono text-sm font-semibold" 
        >
            {cords.x < 1000 && 0}{cords.x} / {cords.y < 1000 && 0}{cords.y}
        </span>
    )
}