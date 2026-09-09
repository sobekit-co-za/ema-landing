import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitTicket } from "@/services/ticketApi";
import { HELP_PAGE, TICKET_MODULES, COMPANY } from "@/content";
import { cn } from "@/lib/utils";
import Seo from "@/components/shared/Seo";
import { SEO } from "@/content/seo";

const EMPTY = {
  fullName: "",
  email: "",
  phone: "",
  moduleCode: "",
  title: "",
  desc: "",
};

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-accent">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

/** /help — the Help Request form, posting to the live eMa ticket API. */
function HelpPage() {
  const [values, setValues] = useState(EMPTY);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: submitTicket,
    onSuccess: () => {
      setValues(EMPTY);
      setFiles([]);
    },
  });

  const set = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    for (const key of ["fullName", "email", "phone", "moduleCode", "title", "desc"]) {
      if (!values[key].trim()) next[key] = HELP_PAGE.required;
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = HELP_PAGE.invalidEmail;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    mutation.mutate({ ...values, documents: files });
  };

  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo title={SEO.help.title} description={SEO.help.description} />
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {HELP_PAGE.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-lg">
          {HELP_PAGE.subtitle}
        </p>
      </motion.div>

      <div className="mx-auto mt-10 max-w-2xl">
        {mutation.isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-5 text-emerald-800"
          >
            <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
            <p className="text-sm">{HELP_PAGE.success}</p>
          </motion.div>
        )}

        {mutation.isError && (
          <div className="mb-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm text-destructive">
            {HELP_PAGE.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={HELP_PAGE.fields.fullName} error={errors.fullName}>
              <input
                type="text"
                value={values.fullName}
                onChange={set("fullName")}
                className={inputClass}
                autoComplete="name"
              />
            </Field>

            <Field label={HELP_PAGE.fields.email} error={errors.email}>
              <input
                type="email"
                value={values.email}
                onChange={set("email")}
                className={inputClass}
                autoComplete="email"
                dir="ltr"
              />
            </Field>

            <Field label={HELP_PAGE.fields.phone} error={errors.phone}>
              <input
                type="tel"
                value={values.phone}
                onChange={set("phone")}
                className={inputClass}
                autoComplete="tel"
                dir="ltr"
              />
            </Field>

            <Field label={HELP_PAGE.fields.module} error={errors.moduleCode}>
              <select
                value={values.moduleCode}
                onChange={set("moduleCode")}
                className={cn(inputClass, "appearance-none")}
              >
                <option value="">{HELP_PAGE.fields.modulePlaceholder}</option>
                {TICKET_MODULES.map((module) => (
                  <option key={module.id} value={module.ticketCode}>
                    {module.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label={HELP_PAGE.fields.title} error={errors.title}>
            <input
              type="text"
              value={values.title}
              onChange={set("title")}
              className={inputClass}
            />
          </Field>

          <Field label={HELP_PAGE.fields.desc} error={errors.desc}>
            <textarea
              rows={5}
              value={values.desc}
              onChange={set("desc")}
              className={cn(inputClass, "resize-y")}
            />
          </Field>

          <Field label={HELP_PAGE.fields.documents}>
            <label className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
              <Paperclip size={16} />
              <span>
                {files.length
                  ? files.map((f) => f.name).join(", ")
                  : HELP_PAGE.fields.documents}
              </span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              />
            </label>
          </Field>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="rounded-full bg-accent px-8 py-5 text-base hover:bg-accent/90"
            >
              {mutation.isPending && (
                <Loader2 size={16} className="animate-spin" />
              )}
              {mutation.isPending ? HELP_PAGE.submitting : HELP_PAGE.submit}
            </Button>

            <a
              href={`mailto:${COMPANY.email.support}`}
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              dir="ltr"
            >
              {COMPANY.email.support}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HelpPage;
