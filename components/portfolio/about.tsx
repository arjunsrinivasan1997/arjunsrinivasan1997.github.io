/* eslint-disable @next/next/no-img-element */
"use client";
const skills = ["TypeScript", "React", "Node.js", "Java", "GraphQL", "Python"];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-foreground">About Me</h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            {" "}
            Hello! I’m Arjun, a software engineer with experience building
            large-scale backend and infrastructure systems. I currently work at
            Meta, where I help design and implement systems that support
            end-to-end encrypted messaging across Messenger and Instagram.
          </p>
          <p>
            Before that, I spent several years at Amazon Prime Video working on
            live streaming reliability, automation, and incident mitigation. My
            work focused on reducing operational load while improving system
            stability at scale. I have also worked in data engineering and
            logistics at high-growth startups, where I concentrated on
            performance, cost optimization, and operational efficiency.{" "}
          </p>
          <p>
            These days, I’m most interested in building reliable, scalable
            systems that operate under real-world constraints and serve millions
            of users.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 pt-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 font-mono text-sm"
              >
                <span className="text-primary">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group inline-block place-self-start">
          <div className="relative z-10 rounded-lg overflow-hidden">
            <img
              src="/myself.JPG"
              alt="Profile photo"
              className="block w-64 h-auto"
            />
          </div>
          <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
}
