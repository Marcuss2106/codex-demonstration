"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export default function NewsletterSignup() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Thanks for your interest. Newsletter signup is a preview and does not send email yet.",
    );
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="newsletter-email">
          Your email address
        </label>
        <input
          autoComplete="email"
          id="newsletter-email"
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <button aria-label="Subscribe to Notes from the Garden" type="submit">
          <Image
            alt=""
            aria-hidden="true"
            height={39}
            src="/illustrations/newsletter-submit.svg"
            width={39}
          />
        </button>
      </form>
      <p aria-live="polite" className="newsletter-message">
        {message}
      </p>
      <p className="newsletter-privacy">
        By subscribing, you agree to receive a monthly email. See our{" "}
        <a href="/privacy">privacy note</a>.
      </p>
    </>
  );
}
