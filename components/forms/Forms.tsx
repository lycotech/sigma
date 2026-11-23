"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { Checkbox, DemoNote, Input, Select, Textarea } from "./Field";
import { useDemoForm } from "./useDemoForm";

const phoneRx = /^\+?[0-9\s-]{7,16}$/;

function Success({ title, body, onAgain }: { title: string; body: string; onAgain: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      role="status"
      className="rounded-2xl border border-gold-500/40 bg-white p-8 text-center shadow-card"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
        className="mx-auto grid size-16 place-items-center rounded-full bg-gold-500/15 text-gold-700"
      >
        <CheckCircle2 className="size-9" />
      </motion.span>
      <h3 className="t-h3 mt-5 text-navy-900">{title}</h3>
      <p className="mt-2 text-ink-soft">{body}</p>
      <Button variant="ghost" className="mt-5" onClick={onAgain}>
        Send another
      </Button>
    </motion.div>
  );
}

function Submit({ busy, children }: { busy: boolean; children: ReactNode }) {
  return (
    <Button type="submit" disabled={busy} className="w-full sm:w-auto">
      {busy && <Loader2 className="size-4 animate-spin" />}
      {busy ? "Sending…" : children}
    </Button>
  );
}

/* ---------- Contact ---------- */
const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(phoneRx, "Enter a valid phone number").or(z.literal("")),
  topic: z.string().min(1, "Choose a topic"),
  message: z.string().min(10, "Please tell us a little more (10+ characters)"),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { form, onSubmit, done, reset } = useDemoForm<ContactValues>("contact", contactSchema);
  const { register, formState: { errors, isSubmitting } } = form;
  if (done) return <Success title="Message received" body="This is a demo: nothing was sent. In production, our team would reply shortly." onAgain={reset} />;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="c-name" label="Full name" autoComplete="name" error={errors.name} {...register("name")} />
        <Input id="c-email" label="Email" type="email" autoComplete="email" error={errors.email} {...register("email")} />
        <Input id="c-phone" label="Phone (optional)" type="tel" autoComplete="tel" error={errors.phone} {...register("phone")} />
        <Select id="c-topic" label="Topic" error={errors.topic} options={["Opening an account", "Trading enquiry", "Account update", "Other"]} {...register("topic")} />
      </div>
      <Textarea id="c-message" label="Message" error={errors.message} {...register("message")} />
      <DemoNote />
      <Submit busy={isSubmitting}>Send message</Submit>
    </form>
  );
}

/* ---------- Newsletter ---------- */
const newsletterSchema = z.object({
  email: z.email("Enter a valid email address"),
  consent: z.literal(true, { error: "Please confirm to continue" }),
});
type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const toast = useToast();
  const { form, onSubmit, done } = useDemoForm<NewsletterValues>("newsletter", newsletterSchema);
  const { register, formState: { errors, isSubmitting } } = form;

  const submit = async (e: React.FormEvent) => {
    await onSubmit(e);
    toast("You're on the list (demo: nothing was sent).");
  };

  if (done)
    return (
      <p role="status" className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 text-white">
        <CheckCircle2 className="size-6 text-gold-400" /> Thank you. You&apos;re subscribed (demo only).
      </p>
    );

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1 [&_label]:sr-only">
          <Input id="n-email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" error={errors.email} {...register("email")} />
        </div>
        <Submit busy={isSubmitting}>Subscribe</Submit>
      </div>
      <div className="text-white/70 [&_label]:text-white/70">
        <Checkbox id="n-consent" label="I agree to receive alerts and news from Sigma Securities." error={errors.consent} {...register("consent")} />
      </div>
      <p className="text-xs text-white/50">Demonstration only: nothing is sent or stored.</p>
    </form>
  );
}

/* ---------- Account update ---------- */
const updateSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(phoneRx, "Enter a valid phone number"),
  update: z.string().min(1, "Choose what to update"),
  details: z.string().min(5, "Describe the change (5+ characters)"),
  confirm: z.literal(true, { error: "Please confirm" }),
});
type UpdateValues = z.infer<typeof updateSchema>;

export function AccountUpdateForm() {
  const { form, onSubmit, done, reset } = useDemoForm<UpdateValues>("account-update", updateSchema);
  const { register, formState: { errors, isSubmitting } } = form;
  if (done) return <Success title="Update request captured" body="Demo only: nothing was sent. In production this would go to the client services team." onAgain={reset} />;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="u-name" label="Full name" autoComplete="name" error={errors.name} {...register("name")} />
        <Input id="u-email" label="Email" type="email" autoComplete="email" error={errors.email} {...register("email")} />
        <Input id="u-phone" label="Phone" type="tel" autoComplete="tel" error={errors.phone} {...register("phone")} />
        <Select id="u-update" label="What would you like to update?" error={errors.update} options={["Contact details", "Address", "Next of kin", "e-Dividend mandate", "Other"]} {...register("update")} />
      </div>
      <Textarea id="u-details" label="Details of the change" error={errors.details} {...register("details")} />
      <Checkbox id="u-confirm" label="I confirm the information above is accurate." error={errors.confirm} {...register("confirm")} />
      <DemoNote />
      <Submit busy={isSubmitting}>Submit update</Submit>
    </form>
  );
}

/* ---------- Open-account enquiry ---------- */
const openSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().regex(phoneRx, "Enter a valid phone number"),
  type: z.string().min(1, "Choose an account type"),
});
type OpenValues = z.infer<typeof openSchema>;

export function OpenAccountForm() {
  const { form, onSubmit, done, reset } = useDemoForm<OpenValues>("open-account", openSchema);
  const { register, formState: { errors, isSubmitting } } = form;
  if (done) return <Success title="Enquiry noted" body="Demo only: nothing was sent. A representative would normally contact you shortly." onAgain={reset} />;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Input id="o-name" label="Full name" autoComplete="name" error={errors.name} {...register("name")} />
      <Input id="o-email" label="Email" type="email" autoComplete="email" error={errors.email} {...register("email")} />
      <Input id="o-phone" label="Phone" type="tel" autoComplete="tel" error={errors.phone} {...register("phone")} />
      <Select id="o-type" label="Account type" error={errors.type} options={["Individual", "Corporate", "Estate", "Minor"]} {...register("type")} />
      <DemoNote />
      <Submit busy={isSubmitting}>Request a call back</Submit>
    </form>
  );
}
