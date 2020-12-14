import React from "react";
import ContentLoader from "react-content-loader";

export default function PizzaLoadingBlock () {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={290}
            height={470}
            viewBox="0 0 280 470"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="120" />
            <rect x="0" y="300" rx="3" ry="3" width="280" height="26" />
            <rect x="0" y="340" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="434" rx="3" ry="3" width="91" height="31" />
            <rect x="146" y="434" rx="3" ry="3" width="130" height="33" />
        </ContentLoader>
    )
}