
import Link from "next/link";

const features = [
  {
    icon: "◈",
    title: "Domain Intelligence",
    description:
      "Identify suspicious URLs, misleading domains, and possible impersonation.",
  },
  {
    icon: "⚠",
    title: "Fraud Detection",
    description:
      "Identify suspicious payment demands, unrealistic promises, and urgent language.",
  },
  {
    icon: "◎",
    title: "Content Analysis",
    description:
      "Discover suspicious similarities and inconsistent scholarship information.",
  },
];

const checks = [
  "Domain and URL analysis",
  "Suspicious payment detection",
  "Organization verification",
  "Content pattern analysis",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] px-5 text-[#F5F0E5] sm:px-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-[#D4AF37]/10 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
            ◆
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide sm:text-xl">
              Scholar<span className="text-[#D4AF37]">Shield</span>
            </h1>
            <p className="text-[9px] tracking-[0.22em] text-[#A9A08D]">
              SCHOLARSHIP SECURITY
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#B0AA9C] md:flex">
          <Link href="#features" className="transition hover:text-[#D4AF37]">
            Features
          </Link>
          <Link href="#how-it-works" className="transition hover:text-[#D4AF37]">
            How It Works
          </Link>
          <Link
            href="/scholarships"
            className="transition hover:text-[#D4AF37]"
          >
            Scholarships
          </Link>
        </nav>

        <Link
          href="/scanner"
          className="rounded-xl bg-gradient-to-r from-[#B8860B] to-[#E0BD55] px-3 py-2.5 text-xs font-bold text-black transition hover:brightness-110 sm:px-5 sm:text-sm"
        >
          Get Started →
        </Link>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 py-20 md:grid-cols-2 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 -z-0 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[100px]" />

        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/5 px-4 py-2 text-xs text-[#E6C86E]">
            <span>✦</span>
            Smart Scholarship Protection
          </div>

          <h2 className="text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your future deserves
            <span className="mt-2 block bg-gradient-to-r from-[#F8E7A1] via-[#D4AF37] to-[#A87922] bg-clip-text pb-2 text-transparent">
              a safer scholarship.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#A9A08D] sm:text-base">
            Investigate suspicious scholarship links, understand potential
            scam signals, and make informed decisions before sharing your
            money or personal information.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/scanner"
              className="rounded-xl bg-gradient-to-r from-[#B8860B] to-[#E0BD55] px-5 py-3.5 text-sm font-bold text-black shadow-lg shadow-black/40 transition hover:brightness-110 sm:px-6"
            >
              <span>⌕</span> Check a Scholarship →
            </Link>

            <Link
              href="/scholarships"
              className="rounded-xl border border-[#D4AF37]/25 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-[#F5F0E5] backdrop-blur-xl transition hover:border-[#D4AF37]/60 sm:px-6"
            >
              Explore Scholarships
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#A9A08D]">
            <span>
              <span className="mr-2 text-[#D4AF37]">✓</span>
              Explainable warnings
            </span>
            <span>
              <span className="mr-2 text-[#D4AF37]">✓</span>
              Student-first security
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 -z-0 rounded-full bg-[#D4AF37]/5 blur-3xl" />

          <div className="relative rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#201B10]/90 to-[#111111]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">Security Scanner</h3>
                <p className="mt-1 text-xs text-[#A9A08D]">
                  Scholarship risk analysis
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                ♢
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-[#D4AF37]/15 bg-black/40 p-5">
              <p className="text-[10px] tracking-[0.22em] text-[#A58A43]">
                SCHOLARSHIP VERIFICATION
              </p>
              <p className="mt-4 text-sm leading-6 text-[#C7C0B1]">
                Analyze a scholarship website for suspicious signals before
                you decide to apply.
              </p>
              <Link
                href="/scanner"
                className="mt-5 block rounded-xl bg-gradient-to-r from-[#B8860B] to-[#E0BD55] py-3.5 text-center text-sm font-bold text-black transition hover:brightness-110"
              >
                Start Security Scan →
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium">Analysis checklist</p>
              <span className="rounded-full border border-[#D4AF37]/20 px-2.5 py-1 text-[9px] tracking-wider text-[#D4AF37]">
                PREVIEW
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {checks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-3.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-sm text-[#D4AF37]">
                    ✓
                  </span>
                  <span className="text-xs text-[#D2CCBE] sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] leading-5 text-[#8C826C]">
              Preview only. No live security scan has been performed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-y border-[#D4AF37]/10 py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["◇", "Risk-aware", "Evidence-based warnings"],
            ["♧", "Student-first", "Clear verification guidance"],
            ["✧", "Security-focused", "Investigate before applying"],
          ].map(([icon, title, description]) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/5 text-xl text-[#D4AF37]">
                {icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-[#A9A08D]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#D4AF37] uppercase">
            Our Capabilities
          </p>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Look beyond the{" "}
            <span className="bg-gradient-to-r from-[#F8E7A1] to-[#B8860B] bg-clip-text text-transparent">
              promise.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#A9A08D]">
            Understand the signals behind a scholarship opportunity before
            trusting its claims.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-[#D4AF37]/15 bg-gradient-to-br from-[#1C1912]/80 to-[#101010]/90 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/45"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#A9A08D]">
                {feature.description}
              </p>
              <Link
                href="/scanner"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] transition group-hover:text-[#F8E7A1]"
              >
                Explore scanner <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl pb-24"
      >
        <div className="rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-br from-[#1B1710]/80 to-[#101010]/95 p-7 backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
            Simple Process
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold">
            From uncertainty to informed decisions.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Submit a scholarship", "Enter a URL or description."],
              ["02", "Analyze risk signals", "Investigate suspicious patterns."],
              ["03", "Review your report", "Understand warnings and next steps."],
            ].map(([number, title, description]) => (
              <div key={number}>
                <p className="text-4xl font-bold text-[#B8860B]/80">
                  {number}
                </p>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A9A08D]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/scanner"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#E0BD55] px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
          >
            Try the Scanner →
          </Link>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#D4AF37]/15 py-8 text-xs text-[#8C826C] sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-sm font-bold text-[#F5F0E5]">
          Scholar<span className="text-[#D4AF37]">Shield</span>
        </Link>
        <p>Scholarship security starts with verification.</p>
        <p>Verify before sharing money or personal data.</p>
      </footer>
    </main>
  );
}


