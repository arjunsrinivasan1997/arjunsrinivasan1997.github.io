"use client";

import Link from "next/link";
import { socialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="py-8">
      {/* Social Links - Mobile */}
      <div className="md:hidden flex justify-center gap-6 mb-6">
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

      <div className="text-center">
        <p className="text-muted-foreground font-mono text-xs">
          Designed & Built by Arjun Srinivasan
        </p>
      </div>
    </footer>
  );
}
