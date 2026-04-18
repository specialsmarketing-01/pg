"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/i18n/DictionaryProvider";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ApiSuccess = { ok: true };
type ApiError = {
  ok: false;
  error?: string;
  issues?: { path: string; message: string }[];
};

export function ContactForm() {
  const { dict } = useDictionary();
  const f = dict.contactForm;

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, f.errors.name),
        email: z.string().email(f.errors.email).max(160, f.errors.email),
        phone: z.string().min(6, f.errors.phone).max(40, f.errors.phone),
        message: z.string().min(10, f.errors.message),
      }),
    [f.errors.email, f.errors.message, f.errors.name, f.errors.phone]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json()) as ApiSuccess | ApiError;

      if (!res.ok || !("ok" in data) || data.ok !== true) {
        const err = data as ApiError;
        if (err.issues?.length) {
          for (const issue of err.issues) {
            const last = issue.path?.split(".").pop() ?? issue.path;
            const field = last as keyof FormValues;
            if (
              field === "name" ||
              field === "email" ||
              field === "phone" ||
              field === "message"
            ) {
              setError(field, { message: issue.message });
            }
          }
        }
        setServerError(err.error ?? f.errorSend);
        return;
      }

      setServerError(null);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setServerError(f.errorNetwork);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {f.name}
          </label>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className="h-10 w-full rounded-lg border border-[#1f1f1f] bg-black px-3 text-sm text-white outline-none ring-0 transition focus:border-accent"
            placeholder={f.namePh}
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {f.email}
          </label>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className="h-10 w-full rounded-lg border border-[#1f1f1f] bg-black px-3 text-sm text-white outline-none ring-0 transition focus:border-accent"
            placeholder={f.emailPh}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {f.phone}
        </label>
        <input
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className="h-10 w-full rounded-lg border border-[#1f1f1f] bg-black px-3 text-sm text-white outline-none ring-0 transition focus:border-accent"
          placeholder={f.phonePh}
        />
        {errors.phone && (
          <p className="text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {f.message}
        </label>
        <textarea
          rows={5}
          {...register("message")}
          className="w-full rounded-lg border border-[#1f1f1f] bg-black px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-accent"
          placeholder={f.messagePh}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="md" disabled={isSubmitting}>
          {isSubmitting ? f.sending : f.submit}
        </Button>
        <div className="flex flex-col items-end gap-1 text-right sm:max-w-[min(100%,280px)]">
          {submitted && (
            <p className="text-xs text-[#22c55e]">{f.success}</p>
          )}
          {serverError && (
            <p className="text-xs text-red-400">{serverError}</p>
          )}
        </div>
      </div>
    </form>
  );
}
