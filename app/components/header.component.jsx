import Link from "next/link"
import { HeaderSuspenseBurgerComponent } from "./header.suspense.burger.component"
import { Suspense } from "react"
import { HeaderScrollEffect } from "./suspense/header.onscroll.effect";
import { HEADER_LINKS } from "@/app/config/index";

export function HeaderComponent() {
    return (
        <header
            className="transition-[backdrop-filter] duration-300 ease data-[blur=true]:backdrop-blur-sm w-full sticky top-0 p-5 z-10 h-13 flex flex-row gap-10 items-center justify-end md:justify-center"
        >
            <div className="absolute left-5 font-heading text-orange-400 font-extrabold">
                Y. Shorobura
            </div>

            {HEADER_LINKS.map((item, ind) => {
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        
                        className="hidden md:block text-sm font-sans font-extrabold hover:text-orange-400 transition-colors duration-200 ease"
                    >
                        {item.title}
                    </Link>
                )
            })}

            <div
                className="block md:hidden"
            >
                <Suspense fallback={
                    <div
                        className="h-11 h-11 bg-grey-300 "
                    >

                    </div>
                }>
                    <HeaderSuspenseBurgerComponent />
                </Suspense>

                <Suspense>
                    <HeaderScrollEffect />
                </Suspense>
            </div>
        </header>   
    )
}