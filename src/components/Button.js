import React from "react";
import classnames from "classnames";

export default function Button ({className, onClick, outline, children}) {
    return (
        <button
            onClick={onClick}
            className={classnames(
                'button',
                className,
                {
                    'button--outline': outline,
                }
            )}
        >
            {children}
        </button>
    )
}