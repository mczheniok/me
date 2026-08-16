import { ShoradoLogoComponent } from "./logos/shorado.logo.component";

export function FooterComponent() {
    return (
        <footer
            className="flex flex-col gap-10 md:gap-3 md:flex-row items-center justify-between py-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-10"
        >
            <div
                className="space-y-3"
            >
                <h6
                    className="font-mono text-sm text-text font-semibold"
                >
                    Yevhenii Shorobura
                </h6>

                <p
                    className="font-mono text-muted text-xs font-semibold"
                >
                    Full-stack engineer / product builder
                </p>
            </div>

            <p
                className="inline-flex font-heading items-center gap-1.5"
            >
                <ShoradoLogoComponent /> 
            </p>

            <div
                className="space-y-3"
            >
                <h6
                    className="inline-block font-mono text-text text-sm font-semibold"
                >
                    have a nice day
                </h6>

                <p
                    className="font-mono text-xs text-end text-muted font-semibold"
                >
                    2026 
                </p>
            </div>
        </footer>
    )
}