"use client"

import { useState } from "react";
import { SECTIONS } from "../config";

export function HeaderSuspenseBurgerComponent() {
    const [open,setOpen] = useState(false);
    const onOpen = () => setOpen(p => !p);

  return (
    <>   
      <button
        onClick={onOpen}
        className="border-none relative z-[10002] h-12 w-12"
      >
        <div
          className="font-mono font-semibold text-text tracking-wider"
        >
          {open ? "CLOSE" : "MENU"}
        </div>
      </button>

      <nav
        className={`
          absolute top-[101%] w-full left-0 bg-bg-glow backdrop-blur-sm
          py-5 px-6 gap-10 border-b border-line
          flex-col ${open ? "flex" : "hidden" }
        `}
      >
        {SECTIONS.map((item) => (
          <a
            key={item.id + "a#"}
            href={`#${item.id}`}
            className="
              w-full text-start text-text 
              font-mono font-semibold text-sm
              transition-colors hover:text-accent
              tracking-wider
            "
          >
            {item.label} 
          </a>
        ))}
      </nav>
    </>
  ); 
};
 