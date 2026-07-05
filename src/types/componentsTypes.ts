import type {LucideIcon} from "lucide-react";
import type {ValidationError} from "@tanstack/react-form";

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/Services" },
];

export interface TitleProps{
    title: string;
    description: string;
    sparklesIcons?: boolean;
    buttonProps?: ButtonProps;
    buttonComponent?: boolean;
}

export  interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined,
    text?: string,
    color?: 'primary' | 'simple' | 'secondary' ,
    disabled?: boolean,
    loading?: boolean,
    icon?: LucideIcon,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export interface BaseFieldProps {
    label: string;
    placeholder?: string;
    errors?: ValidationError[];
    className?: string;
}

export interface TextFieldProps extends BaseFieldProps {
    type?: "text" | "email" | "tel";
    name: string;
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
}

export interface TextAreaFieldProps extends BaseFieldProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    rows?: number;
}

export interface CheckboxFieldProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    onBlur: () => void;
    errors?: ValidationError[];
}

export interface Option {
    label: string
    value: string | number
}

export interface FilterSelectProps {
    value: string | number
    onChange: (value: string) => void
    options: Option[]
    placeholder?: string
    icon?: LucideIcon

}

export interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    options: { label: string; value: string }[];
    placeholder?: string;
    errors?: string[];
    className?: string;
}

export interface ServicesCardProps {
    src : string
    title : string
    description : string
}

export interface LearnMoreBoxProps {
    title : string
    description : string
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface FooterLinkProps {
    title : string
    links :  { label: string, href:string}[]
}