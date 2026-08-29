"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CheckCheck, X } from "lucide-react";

export type ToastType = "success" | "error" | "info";

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

// Simple event bus for toast
type ToastListener = (toast: ToastMessage) => void;
const listeners: ToastListener[] = [];

export function showToast(message: string, type: ToastType = "success") {
  const toast: ToastMessage = { id: Date.now().toString(), message, type };
  listeners.forEach((l) => l(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: ToastMessage) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 3000);
  }, []);

  useEffect(() => {
    listeners.push(addToast);
    return () => {
      const idx = listeners.indexOf(addToast);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, [addToast]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-2xl shadow-card border text-sm font-medium",
            "pointer-events-auto animate-fade-up",
            toast.type === "success" &&
              "bg-emerald-950/90 border-emerald-500/30 text-emerald-300 backdrop-blur-md",
            toast.type === "error" &&
              "bg-red-950/90 border-red-500/30 text-red-300 backdrop-blur-md",
            toast.type === "info" &&
              "bg-surface-2/90 border-accent/30 text-text-primary backdrop-blur-md"
          )}
        >
          {toast.type === "success" && <CheckCheck size={16} className="shrink-0" />}
          {toast.type === "error" && <X size={16} className="shrink-0" />}
          {toast.message}
        </div>
      ))}
    </div>
  );
}
