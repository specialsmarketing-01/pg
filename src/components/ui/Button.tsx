"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#ff6a00] text-white shadow-[0_16px_40px_rgba(255,106,0,0.5)] hover:bg-[#e65c00]",
  secondary:
    "bg-transparent text-[#ff6a00] ring-1 ring-[#ff6a00] hover:bg-[#ff6a00] hover:text-white",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  href,
  onClick,
  type,
  disabled,
  className,
  variant = "primary",
  size = "md",
  children,
}: {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const Inner = (
    <motion.span
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ y: 0, scale: 1.0 }}
      transition={{ type: "spring", stiffness: 520, damping: 34 }}
      className={cn("relative overflow-hidden", classes)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-flex">
        {Inner}
      </Link>
    );
  }

  return (
    <motion.button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ y: 0, scale: 1.0 }}
      transition={{ type: "spring", stiffness: 520, damping: 34 }}
      className={cn("group relative overflow-hidden", classes)}
    >
      {children}
    </motion.button>
  );
}

