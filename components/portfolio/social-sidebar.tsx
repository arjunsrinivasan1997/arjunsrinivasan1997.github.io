"use client";

import Link from "next/link";
import { emailAddress, emailLink, socialLinks } from "./social-links";

export function SocialSidebar() {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <div className="hidden md:flex fixed bottom-0 left-6 lg:left-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        {socialLinks.map(({ icon: Icon, href, label, external }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon className="size-5" />
          </Link>
        ))}
      </div>

      {/* Right Sidebar - Email */}
      <div className="hidden md:flex fixed bottom-0 right-6 lg:right-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <Link
          href={emailLink.href}
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          {emailAddress}
        </Link>
      </div>
    </>
  );
}
