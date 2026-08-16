export function Container({
    styles = "",
    id = "",
    children
}) {
    return (
        <div
            className="w-full relative"
        >
            <section
                id={id}
                className={`w-full min-h-screen max-w-7xl mx-auto px-6 sm:px-8 md:px-10 ${styles}`}
            >
                {children && children}
            </section>
        </div>
    )
}