"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// React 19 hook to handle pending states natively
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-[var(--color-secondary)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Submit Project Details"} 
      {!pending && <ArrowRight size={20} />}
    </button>
  );
}

export default function CTA() {
  // React 19 hook for server actions
  const [state, formAction] = useActionState(submitContact, null);

  return (
    <section className="bg-slate-50 py-24 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Copy */}
        <div className="bg-[var(--color-primary)] p-12 text-white md:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Ready to execute your next project?</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Our technical team is ready to review your BOQ, tender requirements, and provide a comprehensive execution plan.
          </p>
          <div className="mt-auto space-y-2 text-sm text-white/70">
            <p>Email: caliberinfrastructure@gmail.com</p>
            <p>Phone: +91 9959045620</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 md:w-3/5">
          {state?.success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">Request Received</h3>
              <p className="text-gray-600">{state.message}</p>
            </motion.div>
          ) : (
            <form action={formAction} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Agency</label>
                  <input type="text" id="company" name="company" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
                <input type="email" id="email" name="email" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]" />
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Scope / BOQ Summary</label>
                <textarea id="projectDetails" name="projectDetails" rows={4} required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] resize-none"></textarea>
              </div>

              {state?.success === false && (
                <p className="text-red-500 text-sm font-medium">{state.message}</p>
              )}

              <div className="pt-2">
                <SubmitButton />
              </div>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
}