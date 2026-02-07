import { cn } from "@/lib/utils";

interface TextGifProps {
    text: string;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    weight?: "normal" | "medium" | "semi" | "bold";
}

export function TextGif({
    text,
    className,
    size = "md",
    weight = "bold",
}: TextGifProps) {
    const sizeClasses = {
        sm: "text-4xl",
        md: "text-6xl",
        lg: "text-8xl",
        xl: "text-[10rem]",
        xxl: "text-[20rem]",
    };

    const weightClasses = {
        normal: "font-normal",
        medium: "font-medium",
        semi: "font-semibold",
        bold: "font-bold",
    };

    return (
        <span
            className={cn(
                "inline-block leading-none text-white",
                sizeClasses[size],
                weightClasses[weight],
                className
            )}
        >
            {text}
        </span>
    );
}
