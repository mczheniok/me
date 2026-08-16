
import { HeaderSuspenseBurgerComponent } from "./header.suspense.burger.component"
import { Suspense } from "react"
import { SECTIONS } from "@/app/config/index";

export function HeaderComponent() {
    return (
        <header
            className="
                sticky w-full bg-bg z-[1001] top-0
                py-1.75 sm:py-3 md:py-5 
                border-b border-line relative
            "
        >
            <div
                className="w-full flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8 md:px-10"
            >
                <div className="font-mono text-text font-semibold">
                    Y. Shorobura
                </div>

                <nav className="hidden md:flex-1 md:justify-end md:flex items-center justify-around gap-5">
                    {SECTIONS.map((item) => {
                        return (
                            <a
                                key={item.id + "hd-a"}
                                href={`#${item.id}`}
                                className="tracking-wider text-sm font-mono font-semibold hover:text-accent transition-colors"
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div
                    className="block md:hidden"
                >
                    <Suspense fallback={
                        <div
                            className="font-mono font-semibold text-text"
                        >
                            MENU
                        </div>
                    }>
                        <HeaderSuspenseBurgerComponent />
                    </Suspense>
                </div>
            </div>  
        </header>   
    )
}