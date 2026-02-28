import React, { forwardRef }  from "react";

type SizeType = "small" | "middle" | "large";
type ColorType = "primary" | "secondary";

interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" > {
        size: SizeType;
        color: ColorType;
    }

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ size, color, className, ...props }, ref) => {
        const defaultClass =
            "flex items-center h-[40px] w-[max-content] px-4 py-2 outline-none";
        const classes = {
            colors: {
                primary: {
                    input: "bg-amber-700 text-white placeholder:text-white/70 focus:ring-2 focus:ring-amber-400",
                },
                secondary: {
                    input: "bg-red-500 text-white placeholder:text-white/70 focus:ring-2 focus:ring-red-300",
                },
            },
            sizes: {
                small: "rounded-[100px] text-sm",
                middle: "rounded-[14px] text-base",
                large: "rounded-[16px] text-base min-h-[56px]",
            },
        };

        return(
            <input
                ref={ref}
                className={
                    defaultClass +
                    " " +
                    classes.sizes[size] + 
                    " " +
                    classes.colors[color].input +
                    " " +
                    (className ?? "")
                }
                {...props}
            />
        );
    }
);

Input.displayName = "Input";