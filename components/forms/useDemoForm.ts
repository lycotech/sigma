"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues, type Resolver } from "react-hook-form";
import type { ZodType } from "zod";
import { submitForm, type FormKind } from "@/lib/submitForm";

/** Shared form wiring: zod validation, submit via lib/submitForm, success flag. */
export function useDemoForm<T extends FieldValues>(kind: FormKind, schema: ZodType<T>) {
  const [done, setDone] = useState(false);
  const form = useForm<T>({ resolver: zodResolver(schema as never) as Resolver<T>, mode: "onTouched" });

  const onSubmit = form.handleSubmit(async (values) => {
    await submitForm(kind, values);
    setDone(true);
    form.reset();
  });

  return { form, onSubmit, done, reset: () => setDone(false) };
}
