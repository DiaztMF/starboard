"use client";

import { useActionState } from "react";
import { submitContact, type ContactActionState } from "@/src/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactActionState | null, FormData>(
    submitContact,
    null
  );

  return (
    <div id="contact" className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 text-left">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in touch with us</h3>
      <p className="text-gray-600 mb-6 text-sm">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {state?.success ? (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
          {state.message}
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {state?.message && !state.success && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {state.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900 border-gray-300"
            />
            {state?.errors?.name && (
              <p className="text-xs text-red-600 mt-1">{state.errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900 border-gray-300"
            />
            {state?.errors?.email && (
              <p className="text-xs text-red-600 mt-1">{state.errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="How can Starboard help your team?"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-900 border-gray-300"
            />
            {state?.errors?.message && (
              <p className="text-xs text-red-600 mt-1">{state.errors.message[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-medium text-sm rounded-lg shadow transition duration-150 disabled:opacity-50"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
