"use client";
import Link from "next/link";
import { socialLinks } from "./social-links";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center">
      <div className="space-y-6">
        <p className="text-primary font-mono text-sm tracking-wider">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
          <span className="text-balance">Arjun Srinivasan.</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground tracking-tight">
          <span className="text-balance">
            I build resilient software for real-world systems.
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          I’m a software engineer focused on backend and distributed systems,
          currently working on end-to-end encrypted messaging at Meta.
        </p>
        <div className="flex items-center gap-5 pt-4">
          {socialLinks.map(({ icon: Icon, href, label, external }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
        <div className="pt-6">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
