import Link from "next/link";
import { BASE_STYLE, STYLES, PADDINGS, SHAPES, BORDERS } from "./button.styles";

export function ButtonLink ({ 
    style = "dark",  
    shape = "rectengular",
    children,
    href = "/",
    padding = "default",
    border = "secondary",
    className = "",
    ...props
}) {    
    return (
        <Link
            href={href}    
            className={`${BASE_STYLE} 
                ${STYLES[style]} 
                ${PADDINGS[padding]} 
                ${SHAPES[shape]} 
                ${BORDERS[border]}
                ${className}
            `} 
            {...props}
        >
            {children}
        </Link>       
    )
}