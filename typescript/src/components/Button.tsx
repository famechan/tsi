import React  from "react";

type SizeType = "small" | "middle" | "large";
type ColorType = "primary" | "secondary";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: SizeType;
    color: ColorType;
    title: string;
}

export const Button = ({
        size,
        color,
        title,
        disabled = false,
        className,
        ...props
    }: ButtonProps) => {
    const defaultClass = "flex items-center justify-center px-4 py-2 cursor-pointer transition";

    const classes = {
        colors: {
            primary: {
                button: "bg-amber-700 text-white",
            },

            secondary: {
                button: "bg-red-500 text-white",
            },
        },
        sizes: {
            small: "rounded-[100px] font-sm h-[32px]",
            middle: "rounded-[14px] font-base h-[40p]",
            large: "rounded-[16px] font-base min-h-[56px]",
        },
        disabled: "opacity-50, cursor-not-allowed bg-black",
    };
    return (
        <button
            disabled={disabled}
            className={
                defaultClass +
                " " +
                classes.sizes[size] +
                " " +
                classes.colors[color].button +
                " " +
                (disabled ? classes.disabled : "") +
                " " +
                (className ?? "")
            }
            {...props}
        >
            {title}
        </button>
    )
}