import type {ChangeEvent} from "react";
import {AlertCircle} from "lucide-react";
import type {ValidationError} from "@tanstack/react-form";
import type {CheckboxFieldProps, TextAreaFieldProps, TextFieldProps} from "../../types/componentsTypes.ts";

const inputBase = "w-full rounded-xl border bg-bg2 px-4 py-3 placeholder:/30 outline-none transition-colors focus:bg-white/[0.06]";
const inputBorder = (hasError: boolean) =>
    hasError
        ? "border-red-500/60 focus:border-red-500/80"
        : "border-border focus:border-primary";

export function FieldError({ errors }: { errors?: ValidationError[] }) {
    if (!errors || errors.length === 0) return null;
    return (
        <span className="flex items-center gap-1.5 text-sm text-red-400">
            <AlertCircle size={12} />
            {String(errors[0])}
        </span>
    );
}

export function TextField({label, type = "text", name, value, onChange, onBlur, placeholder, errors = [], className,}: TextFieldProps) {
    return (
        <label className={`flex flex-col gap-2 ${className ?? ""}`}>
            <span className="/70">{label}</span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`${inputBase} ${inputBorder(errors.length > 0)}`}
            />
            <FieldError errors={errors} />
        </label>
    );
}

export function TextAreaField({label, name, value, onChange, onBlur, placeholder, errors = [], rows = 5, className,}: TextAreaFieldProps) {
    return (
        <label className={`flex flex-col gap-2 ${className ?? ""}`}>
            <span className="/70">{label}</span>
            <textarea
                name={name}
                rows={rows}
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`resize-none ${inputBase} ${inputBorder(errors.length > 0)}`}
            />
            <FieldError errors={errors} />
        </label>
    );
}

export function CheckboxField({label, name, checked, onChange, onBlur, errors = [],}: CheckboxFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="flex items-start gap-3 /40 text-text-myGray! text-sm md:text-base">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
                    onBlur={onBlur}
                    className="mt-0.5 h-4 w-4 rounded border-border accent-primary "
                />
                {label}
            </label>
            <FieldError errors={errors} />
        </div>
    );
}


