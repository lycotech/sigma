import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";

const control =
  "w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-base text-ink transition-colors placeholder:text-ink-soft/60 focus:border-brand-500";

interface FieldShellProps {
  label: string;
  id: string;
  error?: FieldError;
  children: ReactNode;
  hint?: string;
}

/** Label + control + accessible inline error. */
export function FieldShell({ label, id, error, children, hint }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink-soft">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-down">
          {error.message}
        </p>
      )}
    </div>
  );
}

type Base = { label: string; id: string; error?: FieldError; hint?: string };

export function Input({ label, id, error, hint, className, ...rest }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell label={label} id={id} error={error} hint={hint}>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, error ? "border-down" : "border-line", className)}
        {...rest}
      />
    </FieldShell>
  );
}

export function Textarea({ label, id, error, hint, className, ...rest }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell label={label} id={id} error={error} hint={hint}>
      <textarea
        id={id}
        rows={5}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, error ? "border-down" : "border-line", className)}
        {...rest}
      />
    </FieldShell>
  );
}

export function Select({
  label,
  id,
  error,
  hint,
  options,
  className,
  ...rest
}: Base & { options: string[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell label={label} id={id} error={error} hint={hint}>
      <select
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, error ? "border-down" : "border-line", className)}
        {...rest}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function Checkbox({
  label,
  id,
  error,
  ...rest
}: { label: ReactNode; id: string; error?: FieldError } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="flex min-h-11 items-start gap-3 text-sm text-ink-soft">
        <input id={id} type="checkbox" className="mt-1 size-5 accent-[var(--color-brand-500)]" {...rest} />
        <span>{label}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1 text-sm text-down">
          {error.message}
        </p>
      )}
    </div>
  );
}

export function DemoNote() {
  return (
    <p className="rounded-xl border border-dashed border-brand-600/50 bg-brand-500/10 p-3 text-xs text-navy-900">
      Demonstration form: nothing is sent or stored. Please do not enter sensitive information
      such as BVN, bank details or ID numbers.
    </p>
  );
}
