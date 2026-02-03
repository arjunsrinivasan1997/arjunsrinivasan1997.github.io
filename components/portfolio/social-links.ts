import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export type SocialLink = {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
  external: boolean;
};

export const emailAddress = "arjunsrinivasan1997@gmail.com";

export const emailLink: SocialLink = {
  icon: Mail,
  href: `mailto:${emailAddress}`,
  label: "Email",
  external: true,
};

export const socialLinks: SocialLink[] = [
  {
    icon: SiGithub,
    href: "https://github.com/arjunsrinivasan1997/",
    label: "GitHub",
    external: true,
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/arjunsrinivasan1997/",
    label: "LinkedIn",
    external: true,
  },
  emailLink,
];
