import Title from "../../components/mainTitle";
import { useForm } from "@tanstack/react-form";
import type {PurchaseFormValues, SubmitResult} from "../../types/types.ts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckboxField, TextAreaField, TextField } from "../../components/inputForm";
import { Loader2, Mail, Phone, Send } from "lucide-react";
import {BATHROOMS, BEDROOMS, BUDGETS, LOCATIONS, PROPERTY_TYPES, PurchaseDefaultValues} from "../../data";
import {SelectField} from "../../components/inputForm/selectField.tsx";

export const PurchaseForm = () => {
    async function submitContactForm(values: PurchaseFormValues): Promise<SubmitResult> {
        await new Promise(resolve => setTimeout(resolve, 1200));
        console.debug("Submitting:", values);
        return { success: true };
    }

    const mutation = useMutation({ mutationFn: submitContactForm });

    const form = useForm({
        defaultValues: PurchaseDefaultValues,
        onSubmit: async ({ value, formApi }) => {
            try {
                await mutation.mutateAsync(value);
                toast.success("Message sent! We'll be in touch soon 🎉");
                console.log(toast.success("hey"));
                formApi.reset();
            } catch {
                toast.error("Something went wrong. Please try again.");
            }
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
        const hasErrors = Object.values(form.state.fieldMeta).some(m => m.errors.length > 0);
        if (hasErrors) {
            const messages = Object.entries(form.state.fieldMeta)
                .filter(([, m]) => m.errors.length > 0)
                .map(([, m]) => `• ${m.errors[0]}`)
                .join("\n");
            toast.error(
                <div>
                    <p className="font-medium mb-1">Please fix the following:</p>
                    <pre className="text-sm whitespace-pre-wrap">{messages}</pre>
                </div>
            );
        }
    };

    return (
        <section className="Wrapper my-12">
            <Title
                title="Let's Make it Happen"
                description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
                buttonComponent={false}
            />

            <div className="rounded-3xl border border-border bg-bg p-6 sm:p-12">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {/* ─── Row 1: First Name, Last Name, Email, Phone ─── */}
                    <form.Field
                        name="firstName"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "First name is required" : undefined }}
                    >
                        {field => (
                            <TextField
                                label="First Name"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Enter First Name"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field
                        name="lastName"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Last name is required" : undefined }}
                    >
                        {field => (
                            <TextField
                                label="Last Name"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Enter Last Name"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field
                        name="email"
                        validators={{
                            onBlur: ({ value }) => {
                                if (!value.trim()) return "Email is required";
                                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
                            },
                        }}
                    >
                        {field => (
                            <TextField
                                label="Email"
                                type="email"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Enter your Email"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field
                        name="phone"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Phone is required" : undefined }}
                    >
                        {field => (
                            <TextField
                                label="Phone"
                                type="tel"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Enter Phone Number"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    {/* ─── Row 2: Location, Property Type, Bathrooms, Bedrooms ─── */}
                    <form.Field name="preferredLocation">
                        {field => (
                            <SelectField
                                label="Preferred Location"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Select Location"
                                options={LOCATIONS.map(l => ({ label: l, value: l }))}
                            />
                        )}
                    </form.Field>

                    <form.Field name="propertyType">
                        {field => (
                            <SelectField
                                label="Property Type"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Select Property Type"
                                options={PROPERTY_TYPES.map(t => ({ label: t, value: t }))}
                            />
                        )}
                    </form.Field>

                    <form.Field name="bathrooms">
                        {field => (
                            <SelectField
                                label="No. of Bathrooms"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Select no. of Bathrooms"
                                options={BATHROOMS.map(b => ({ label: b, value: b }))}
                            />
                        )}
                    </form.Field>

                    <form.Field name="bedrooms">
                        {field => (
                            <SelectField
                                label="No. of Bedrooms"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Select no. of Bedrooms"
                                options={BEDROOMS.map(b => ({ label: b, value: b }))}
                            />
                        )}
                    </form.Field>

                    {/* ─── Row 3: Budget (half width) + Preferred Contact Method (half width) ─── */}
                    <form.Field name="budget">
                        {field => (
                            <SelectField
                                label="Budget"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Select Budget"
                                options={BUDGETS}
                                className="lg:col-span-2"
                            />
                        )}
                    </form.Field>

                    {/* Preferred Contact Method */}
                    <form.Field name="contactMethod">
                        {methodField => (
                            <div className="lg:col-span-2 flex flex-col gap-2">
                                <label className="text-sm md:text-base font-medium ">Preferred Contact Method</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Phone option */}
                                    <form.Field name="contactMethodPhone">
                                        {phoneField => (
                                            <div className={`flex items-center gap-2 border rounded-xl bg-bg2 px-4 py-3 cursor-pointer transition-colors ${methodField.state.value === "phone" ? "border-primary" : "border-border"}`}
                                                 onClick={() => methodField.handleChange("phone")}
                                            >
                                                <Phone size={16} className="text-text-myGray! shrink-0" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Number"
                                                    value={phoneField.state.value}
                                                    onChange={e => phoneField.handleChange(e.target.value)}
                                                    className="bg-transparent outline-none text-sm w-full"
                                                />
                                                <div
                                                    className={`w-3 h-3 rounded-full border-2 shrink-0 transition-colors ${methodField.state.value === "phone" ? "border-primary bg-primary" : "border-border"}`}
                                                />
                                            </div>
                                        )}
                                    </form.Field>

                                    {/* Email option */}
                                    <form.Field name="contactMethodEmail">
                                        {emailField => (
                                            <div className={`flex items-center gap-2 border rounded-xl bg-bg2 px-4 py-3 cursor-pointer transition-colors ${methodField.state.value === "email" ? "border-primary" : "border-border"}`}
                                                 onClick={() => methodField.handleChange("email")}
                                            >
                                                <Mail size={16} className="text-text-myGray! shrink-0" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Email"
                                                    value={emailField.state.value}
                                                    onChange={e => emailField.handleChange(e.target.value)}
                                                    className="bg-transparent outline-none text-sm w-full"
                                                />
                                                <div
                                                    className={`w-3 h-3 rounded-full border-2 shrink-0 transition-colors ${methodField.state.value === "email" ? "border-primary bg-primary" : "border-border"}`}
                                                />
                                            </div>
                                        )}
                                    </form.Field>
                                </div>
                            </div>
                        )}
                    </form.Field>

                    {/* ─── Message ─── */}
                    <form.Field
                        name="message"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Please write a message" : undefined }}
                    >
                        {field => (
                            <TextAreaField
                                label="Message"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Enter your Message here..."
                                errors={field.state.meta.errors}
                                className="lg:col-span-4"
                            />
                        )}
                    </form.Field>


                    <form.Field
                        name="agree"
                        validators={{ onChange: ({ value }) => !value ? "You must agree to continue" : undefined }}
                    >
                        {field => (
                            <div className="md:col-span-4 flex items-center justify-between flex-wrap gap-4m ">
                                <CheckboxField
                                    label="I agree with Terms of Use and Privacy Policy"
                                    name={field.name}
                                    checked={field.state.value}
                                    onChange={field.handleChange}
                                    onBlur={field.handleBlur}
                                    errors={field.state.meta.errors}
                                />
                                <form.Subscribe selector={state => state.isSubmitting}>
                                    {isSubmitting => (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || mutation.isPending}
                                            className="text-sm md:text-base flex w-full md:w-auto justify-center md:inline-flex items-center gap-2 rounded-xl bg-primary px-3 md:px-6 py-3 my-3 md:my-0 font-medium transition-colors hover:bg-primary-65 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {isSubmitting || mutation.isPending ? (
                                                <>Sending... <Loader2 size={16} className="animate-spin" /></>
                                            ) : (
                                                <>Send Your Message <Send size={16} strokeWidth={2} /></>
                                            )}
                                        </button>
                                    )}
                                </form.Subscribe>
                            </div>
                        )}
                    </form.Field>

                </form>
            </div>
        </section>
    );
};