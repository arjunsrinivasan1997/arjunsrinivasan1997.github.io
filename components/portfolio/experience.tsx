"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "Meta (Messenger)",
    tabLabel: "Meta",
    title: "Software Engineer",
    url: "https://www.messenger.com/",
    range: "2024 — Present",
    duties: [
      "Designed and implemented multiple systems to support the deployment of end-to-end encrypted messaging on both Messenger and Instagram.",
      "Enhanced telemetry collection and improved automated processing and categorization of reported bugs, resulting in a 30% reduction in average bug resolution time.",
    ],
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    company: "Amazon (Prime Video)",
    tabLabel: "Amazon",
    title: "Software Engineer",
    url: "https://www.primevideo.com/sports",
    range: "2021 — 2024",
    duties: [
      "Developed a system that could automatically resolve live stream errors, reducing overall issue volume by 20%.",
      "Implemented a system that analyzed current issues and recommended solutions based on how similar issues were solved in the past, reducing staffing needs for live events by 35%.",
    ],
    skills: ["TypeScript", "Python", "Java", "AWS"],
  },
  {
    company: "TrueCar",
    tabLabel: "TrueCar",
    title: "Data Engineer",
    url: "https://www.truecar.com",
    range: "2018 — 2020",
    duties: [
      "Developed an entirely new data pipeline that facilitated the processing of thousands of new records per day for Ford and Acura vehicles.",
      "Optimized algorithm for processing new car data, reducing overall execution time by 20%.",
    ],
    skills: ["Java", "SpringBoot"],
  },
  {
    company: "Deliverr",
    tabLabel: "Deliverr",
    title: "Software Engineer",
    range: "2020 — 2020",
    duties: [
      "Reduced cost of orders by 25% implementing a solution that allowed for groups of orders to have lower on time delivery targets based on where the order originated.",
      "Lowered inventory receiving errors by 15% by developing an API that made critical information on shipping labels more visible.",
    ],
    skills: ["Python", "TypeScript"],
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-foreground">
          Where I&apos;ve Worked
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-colors duration-200",
                "hover:bg-secondary hover:text-primary",
                "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                activeTab === index
                  ? "text-primary border-primary bg-secondary"
                  : "text-muted-foreground border-transparent"
              )}
            >
              {exp.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-4 md:py-0 min-h-[350px]">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(
                "space-y-4",
                activeTab === index ? "block" : "hidden"
              )}
            >
              <h3 className="text-xl font-medium text-foreground">
                {exp.title}{" "}
                {exp.url ? (
                  <Link
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    @ {exp.company}
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : (
                  <span className="text-primary">@ {exp.company}</span>
                )}
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                {exp.range}
              </p>
              <ul className="space-y-3">
                {exp.duties.map((duty) => (
                  <li
                    key={duty}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
