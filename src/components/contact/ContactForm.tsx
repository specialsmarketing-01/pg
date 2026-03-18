"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z
    .string()
    .email("Please enter a valid email.")
    .max(160, "Email is too long."),
  message: z.string().min(10, "Tell us a bit more about your project."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: FormValues) => {
    // TODO: connect to your email provider (Nodemailer, EmailJS, etc.)
    console.log("Contact form submitted", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="h-10 w-full rounded-lg border border-[#1f1f1f] bg-black px-3 text-sm text-white outline-none ring-0 transition focus:border-[#ff6a00]"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="h-10 w-full rounded-lg border border-[#1f1f1f] bg-black px-3 text-sm text-white outline-none ring-0 transition focus:border-[#ff6a00]"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Project details
        </label>
        <textarea
          rows={5}
          {...register("message")}
          className="w-full rounded-lg border border-[#1f1f1f] bg-black px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-[#ff6a00]"
          placeholder="Where are you today, and what would great look like?"
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="md" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
        {submitted && (
          <p className="text-xs text-[#22c55e]">
            Message sent. We&apos;ll get back to you shortly.
          </p>
        )}
      </div>
    </form>
  );
}

