import { BASE_STYLE, STYLES, PADDINGS, SHAPES, BORDERS } from "./button.styles";

export function Button ({  
    type = "button",
    style = "dark",  
    shape = "rectengular",
    children,
    click,
    padding = "default",
    border = "secondary",
    ...props
}) {    
    return (
        <button 
            role="button"
            type={type}    
            className={`${BASE_STYLE} 
                ${STYLES[style]} 
                ${PADDINGS[padding]} 
                ${SHAPES[shape]} 
                ${BORDERS[border]}
            `} 
            onClick={click}
            {...props}
        >
            {children}
        </button>       
    )
}