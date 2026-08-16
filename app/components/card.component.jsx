export function CardComponent({
    ind = "",
    title = "",
    isLast = false,
    description = "",
    children,
}) {
    return (
        <div
            className={`space-y-1.5 ${!isLast && "border-b border-line"} py-5`}
        >
            <div
                  className="w-full flex items-center gap-1.5 flex-row md:flex-col md:items-start"
                >
                  <span
                    className="font-mono text-sm text-muted inline-block"
                  > 
                    0{ind + 1}
                  </span>

                  <h4
                    className="font-bold text-text font-mono text-lg"
                  >
                    {title}
                  </h4>
                </div>

            <p className="max-w-xl font-semibold text-muted text-sm">
              {description}
            </p>

            {children && children}
        </div>
    );
};