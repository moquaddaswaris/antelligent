export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 px-8 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Antelligent
          </h1>

          <div className="flex gap-8 text-sm text-secondary">
            <a
              href="#home"
              className="transition-colors hover:text-foreground"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#system"
              className="transition-colors hover:text-foreground"
            >
              System
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-[82vh] items-center justify-center px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-secondary shadow-sm">
            Autonomous Swarm Intelligence
          </div>

          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Antelligent
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary">
            Intelligent Swarm Drone System for autonomous coordination,
            communication, and mission execution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#system"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Explore System
            </a>

            <a
              href="#about"
              className="rounded-xl border border-border bg-surface px-6 py-3 font-medium text-foreground transition hover:bg-surface-muted"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-border px-8 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for intelligent coordination
            </h2>

            <p className="mt-6 text-lg leading-8 text-secondary">
              Antelligent is a swarm drone platform designed to enable
              multiple autonomous drones to work together as a coordinated
              system. The platform focuses on communication, task
              allocation, telemetry, and autonomous mission execution.
            </p>
          </div>
        </div>
      </section>

      {/* System */}
      <section
        id="system"
        className="border-t border-border bg-surface-muted px-8 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Architecture
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Antelligent System
            </h2>

            <p className="mt-5 text-secondary">
              A distributed architecture connecting mission control,
              swarm intelligence, and autonomous aerial agents.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                01
              </div>

              <h3 className="text-xl font-semibold">
                Ground Control
              </h3>

              <p className="mt-3 leading-7 text-secondary">
                Manage missions, configure objectives, and monitor the
                complete swarm from a centralized control interface.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                02
              </div>

              <h3 className="text-xl font-semibold">
                Swarm Manager
              </h3>

              <p className="mt-3 leading-7 text-secondary">
                Coordinate communication, distribute tasks, and maintain
                intelligent decision-making across the swarm.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                03
              </div>

              <h3 className="text-xl font-semibold">
                Autonomous Drones
              </h3>

              <p className="mt-3 leading-7 text-secondary">
                Execute assigned missions, exchange telemetry, and
                operate collaboratively with other members of the swarm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-border px-8 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Autonomous intelligence, working together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-secondary">
            Antelligent brings together intelligent coordination,
            autonomous systems, and swarm robotics into one platform.
          </p>

          <a
            href="mailto:contact@antelligent.com"
            className="mt-8 inline-block rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-secondary sm:flex-row">
          <p>© 2026 Antelligent. All rights reserved.</p>

          <p>
            Autonomous Swarm Intelligence
          </p>
        </div>
      </footer>
    </main>
  );
}