import React from "react";

type Variant = "body" | "caption" | "title";
type Color = "primary" | "secondary";

interface TextProps {
    variant: Variant;
    color? : Color;
    children: React.ReactNode;
}

export const Text = ({ variant, color = "primary", children }: TextProps) => {
    const variants = {
        body: "text-base",
        caption: "text-sm",
        title: "text-xl font-semibold",
    };

    const colors = {
        primary: "text-black",
        secondary: "text-gray-500",
    };

    return(
        <p className={`${variants[variant]} ${colors[color]}`}>
            {children}
        </p>
    );
};