import { useForm } from "@tanstack/react-form";
import type {ContactFormValues, SubmitResult} from "../../types/types.ts";
import {useMutation} from "@tanstack/react-query";
import { toast } from "sonner";
import {CheckboxField, TextAreaField, TextField} from "../../components/inputForm";
import {Loader2, Send} from "lucide-react";
import Title from "../../components/mainTitle";
import {defaultValues} from "../../data";


export const ContactFormSection = () => {
    async function submitContactForm(values: ContactFormValues): Promise<SubmitResult> {
        await new Promise((resolve) =>
            setTimeout(resolve, 1200));
        console.debug("Submitting contact form:", values);
        return { success: true };
    }

    const mutation = useMutation({ mutationFn: submitContactForm });

    const form = useForm({
        defaultValues,
        onSubmit: async ({ value, formApi }) => {
            try {
                await mutation.mutateAsync(value);
                toast.success("Message sent! We'll be in touch soon 🎉");
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
        const hasErrors = Object.values(form.state.fieldMeta).some(
            (meta) => meta.errors.length > 0
        );

        if (hasErrors) {
            const messages = Object.entries(form.state.fieldMeta)
                .filter(([, meta]) => meta.errors.length > 0)
                .map(([, meta]) => `• ${meta.errors[0]}`)
                .join("\n");

            toast.error(
                <div>
                    <p className="font-medium mb-1">Please fix the following:</p>
                    <pre className="text-sm whitespace-pre-wrap">{messages}</pre>
                </div>,
               /* {autoClose: 5000 }*/
            );
        }
    };

    return (
        <section className="Wrapper my-9 md:my-24">
            <Title
                title='Let&apos;s Connect'
                description='Fill out the form below and one of our agents will get back to you within
                        24 hours. We&apos;d love to hear about what you&apos;re looking for.'
                buttonComponent={false}
            />
            <div className="rounded-3xl border border-border bg-bg2 p-6 sm:p-12">

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <form.Field
                        name="firstName"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "First name is required" : undefined }}
                    >
                        {(field) => (
                            <TextField
                                label="First Name"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="John"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field
                        name="lastName"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Last name is required" : undefined }}
                    >
                        {(field) => (
                            <TextField
                                label="Last Name"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Doe"
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
                                return undefined;
                            },
                        }}
                    >
                        {(field) => (
                            <TextField
                                label="Email"
                                type="email"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="john@example.com"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field
                        name="phone"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Phone number is required" : undefined }}
                    >
                        {(field) => (
                            <TextField
                                label="Phone"
                                type="tel"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="+1 (123) 456-7890"
                                errors={field.state.meta.errors}
                            />
                        )}
                    </form.Field>

                    <form.Field name="inquiryType">
                        {(field) => (
                            <TextField
                                label="Inquiry Type"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Buying, Selling, Renting..."
                            />
                        )}
                    </form.Field>

                    <form.Field name="property">
                        {(field) => (
                            <TextField
                                label="What Property Are You Interested In?"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="e.g. Estatein Plaza, Unit 4B"
                            />
                        )}
                    </form.Field>

                    <form.Field

                        name="message"
                        validators={{ onBlur: ({ value }) => !value.trim() ? "Please write a message" : undefined }}
                    >
                        {(field) => (
                            <TextAreaField
                                label="Message"
                                name={field.name}
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                                placeholder="Tell us a bit more about what you're looking for..."
                                errors={field.state.meta.errors}
                                className="sm:col-span-2"
                            />
                        )}

                    </form.Field>

                    <form.Field

                        name="agree"
                        validators={{ onChange: ({ value }) => !value ? "You must agree to continue" : undefined }}
                    >
                        {(field) => (
                            <div className="sm:col-span-2">
                                <CheckboxField
                                    label="I agree with Terms of Use and Privacy Policy"
                                    name={field.name}
                                    checked={field.state.value}
                                    onChange={field.handleChange}
                                    onBlur={field.handleBlur}
                                    errors={field.state.meta.errors}
                                />
                            </div>
                        )}

                    </form.Field>

                    <div className="sm:col-span-2">
                        <form.Subscribe selector={(state) => state.isSubmitting}>
                            {(isSubmitting) => (
                                <button
                                    type="submit"
                                    disabled={isSubmitting || mutation.isPending}
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium transition-colors hover:bg-primary-65 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSubmitting || mutation.isPending ? (
                                        <>Sending... <Loader2 size={16} className="animate-spin" /></>
                                    ) : (
                                        <>Get In Touch <Send size={16} strokeWidth={2} /></>
                                    )}
                                </button>
                            )}
                        </form.Subscribe>
                    </div>
                </form>
            </div>
        </section>
    );
};
