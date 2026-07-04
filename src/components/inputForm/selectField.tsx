import type {SelectFieldProps} from "../../types/componentsTypes.ts";

export function SelectField({ label, name, value, onChange, onBlur, options, placeholder, errors, className }: SelectFieldProps) {
    return (
        <div className={`flex flex-col gap-1 ${className ?? ""}`}>
            <label className="text-sm md:text-base font-medium ">{label}</label>
            <select
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                onBlur={onBlur}
                className="w-full border text-text-myGray! border-border bg-bg2 rounded-xl px-4 py-3 text-sm md:text-base outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
                <option value="" disabled>{placeholder ?? `Select ${label}`}</option>
                {options.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
            {errors?.[0] && <p className="text-red-400 text-xs">{errors[0]}</p>}
        </div>
    );
}