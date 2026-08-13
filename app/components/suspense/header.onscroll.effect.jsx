"use client"
import { useEffect, useRef } from "react";


export function HeaderScrollEffect() {
    const timeoutRef = useRef(null);
    const headerRef = useRef(null);
    
    useEffect(() => {
        headerRef.current = document.querySelector("header");

        const onScroll = () => {
            if(timeoutRef.current || !headerRef.current) {
                return;
            };

            timeoutRef.current = setTimeout(() => {
                if(window.scrollY > 50 ) {
                    headerRef.current.setAttribute("data-blur", "true");
                } else {
                    headerRef.current.setAttribute("data-blur", "false");
                };

                timeoutRef.current = null;
                return;
            }, 100);
        };

        window.addEventListener("scrollend", onScroll);

        return () => {
            timeoutRef.current = null;
            window.removeEventListener("scrollend", onScroll);
        }
    }, []);
    
    return null
}