"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Deal or No Deal EV Calculator",
    description:
      "An interactive calculator that estimates fair offers and outcome volatility in Deal or No Deal based on the current board state",
    tech: ["React", "TypeScript", "NextJS"],
    github: "https://github.com/arjunsrinivasan1997/deal-no-deal-ev-calc",
    external: "https://calculator.arjunsrinivasan.dev",
  },
  {
    title: "Fluid Simulator",
    description:
      "A WebGL fluid simulator based on Navier-Stokes equations that allowed users to control density and velocity of the fluid.",
    tech: ["JavaScript", "WebGL"],
    external: "/fluidSim/index.html",
  },
];

export function Projects() {
  return (
    <section id="projects" className="pt-24 pb-2">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-foreground">
          Some Other Things I&apos;ve Built
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      {/* Featured Projects */}
      <div className="space-y-16 mb-24">
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={project.title}
              className={`flex flex-col gap-4 ${
                isReversed ? "md:items-end md:text-right" : "md:items-start"
              }`}
            >
              <p className="text-primary font-mono text-sm">Featured Project</p>
              <h3 className="text-2xl font-bold text-foreground leading-tight">
                {project.external ? (
                  <Link
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-primary/20 px-3 py-2 hover:text-primary transition-colors"
                  >
                    {project.title}
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : (
                  <span className="inline-block rounded bg-primary/20 px-3 py-2">
                    {project.title}
                  </span>
                )}
              </h3>
              <div className="bg-card/60 border border-border/50 rounded p-6 md:max-w-2xl">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
                  isReversed ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(project.github || project.external) && (
                <div
                  className={`flex gap-4 ${
                    isReversed ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="size-5" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
