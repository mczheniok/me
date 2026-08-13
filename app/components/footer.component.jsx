import { ShoradoLogoComponent } from "./logos/shorado.logo.component";

export function FooterComponent() {
    return (
        <footer
            className="w-full p-5 flex items-center h-30 gap-10 justify-center"
        >
            <p
                className="inline-flex font-heading items-center gap-1.5"
            >
                <ShoradoLogoComponent /> 
            </p>
        </footer>
    )
}