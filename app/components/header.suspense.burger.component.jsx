"use client"
import { useState } from "react";
import { Button } from "./buttons/button.main.component";
import { HEADER_LINKS } from "../config";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeaderSuspenseBurgerComponent() {
    const [open,setOpen] = useState(false);
    const onOpen = () => setOpen(p => !p);

    return (
        <>   
            <Button
              border="transparent"
              style="transparent"
              padding="sm"
              shape="pill"
              click={onOpen}
              className="relative z-[10002] h-12 w-12"
            >
              <span
                className={`
                  absolute left-1/2 top-1/2
                  h-[2px] w-6 rounded-xl bg-white
                  transition-all duration-300
                  -translate-x-1/2 -translate-y-1.5/2
                  ${open ? "rotate-45" : "-translate-y-1.5"}
                `}
              />

              <span
                className={`
                  absolute left-1/2 top-1/2
                  h-[2px] w-6 rounded-xl bg-white
                  transition-all duration-300
                  -translate-x-1/2 -translate-y-1.5/2
                  ${open ? "-rotate-45" : "translate-y-1.5"}
                `}
              />
            </Button>
            
            <div
              className={`w-full flex flex-col items-center justify-around pt-20 gap-10 p-5 h-full z-101 fixed bottom-0 left-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm transition-opacity duration-300 ease ${open ? "opacity-100" : "opacity-0"}`}
            >
              {HEADER_LINKS.map((item, ind) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href + ind}
                    href={item.href}
                    className="w-full text-3xl h-12 text-start focus:text-orange-400 flex items-center gap-3.5"
                  >
                    <Icon 
                      size={30}
                      className=""
                    />
                    
                    <p
                      className="w-full"
                    >
                      {item.title}
                    </p>

                    <ChevronRight
                      className="mr-2" 
                      size={30}
                    />
                  </Link>
                )

              })}

                  <Link
                    href={"/"}
                    className="w-full text-3xl h-12 text-start focus:text-orange-400 flex items-center gap-3.5"
                  >                    
                    <p
                      className="w-full"
                    >
                      Linkedin
                    </p>

                    <ChevronRight
                      className="mr-2" 
                      size={30}
                    />
                  </Link>
            </div>
        </>
    ) 
}
 