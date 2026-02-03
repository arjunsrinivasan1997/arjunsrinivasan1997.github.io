"use client";

import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="pt-20 pb-24 text-center max-w-2xl mx-auto">
      <p className="text-primary font-mono text-sm mb-4">What&apos;s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Get In Touch
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-10">
        I’m always happy to connect and hear about interesting ideas or
        projects. Whether you have a question, want to collaborate, or just want
        to say hi, feel free to reach out. My inbox is always open, and I’ll do
        my best to get back to you!
      </p>
      <Link
        href="mailto:arjunsrinivasan1997@gmail.com"
        target="_blank"
        className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
      >
        Say Hello
      </Link>
    </section>
  );
}
