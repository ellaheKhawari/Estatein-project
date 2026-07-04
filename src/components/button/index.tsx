import type { ButtonProps } from "../../types/componentsTypes.ts";

const colorMap = {
    primary: "bg-primary border-primary",
    simple: "bg-bg2 border-border hover:border-primary",
    secondary: "bg-bg2 border-primary ",
};

const Button = ({type, icon: Icon, text, color = "simple", disabled = false, loading = false, onClick,}: ButtonProps) => {

    const btnColor = colorMap[color] ?? colorMap.simple;
    const isDisabled = disabled || loading;
    return (
        <button
            type={type}
            className={`flex border font-semibold items-center justify-center gap-2 px-2 md:px-4 py-2 text-sm md:text-lg rounded-lg transition-colors self-start whitespace-nowrap
        ${btnColor}
        ${isDisabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}
      `}
            disabled={isDisabled}
            onClick={onClick}
        >
            {Icon && <Icon size={15}/>}
            {loading && <span className="loader" />}
            {text}
        </button>
    );
};

export default Button;