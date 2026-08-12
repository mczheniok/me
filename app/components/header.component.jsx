import Link from "next/link"
import { HeaderSuspenseBurgerComponent } from "./header.suspense.burger.component"
import { Suspense } from "react"
import { HEADER_LINKS } from "@/app/config/index";

export function HeaderComponent() {
    return (
        <header
            className="w-full sticky top-0 py-1.5 z-10 h-13 flex flex-row gap-10 items-center justify-end md:justify-center"
        >
            <div className="absolute left-0 font-heading text-orange-400 font-extrabold">
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
            </div>
        </header>   
    )
}