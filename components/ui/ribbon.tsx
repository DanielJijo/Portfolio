"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RibbonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const variants = {
  default: "bg-gray-100 text-gray-900",
  primary: "bg-blue-500 text-white",
  secondary: "bg-purple-500 text-white",
  accent: "bg-pink-500 text-white",
};

const sizes = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
};

const positions = {
  "top-left": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
  "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
  "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
  "bottom-right": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
};

export function Ribbon({
  className,
  children,
  variant = "default",
  size = "md",
  position = "top-right",
  ...props
}: RibbonProps) {
  return (
      <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "absolute z-50 rounded-md font-medium shadow-sm",
        variants[variant],
        sizes[size],
        positions[position],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
} 