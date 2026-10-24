"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { ui } from "../lib/ui";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  title,
  onClose,
  children,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousElement?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="my-auto w-full max-w-xs rounded-2xl border border-border bg-surface p-4 shadow-2xl outline-none sm:max-w-sm sm:p-5"
        style={{ maxHeight: "85dvh", overflowY: "auto" }}
      >
        <div className="mb-3 flex justify-center sm:hidden">
          <span
            className="h-1 w-8 rounded-full bg-border-strong"
            aria-hidden="true"
          />
        </div>

        {children}

        <div className="mt-4 flex justify-end border-t border-border pt-3">
          <button
            type="button"
            className={ui.btn}
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
