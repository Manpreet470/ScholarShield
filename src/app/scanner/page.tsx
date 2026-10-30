"use client";
import { useState } from "react";
import Link from "next/link";

const trustedScholarshipDomains = [
  "scholarships.gov.in",
];

const checks = [
  "Domain and URL patterns",
  "Suspicious payment demands",
  "Organization verification",
  "Misleading scholarship claims",
];

export default function ScannerPage() {
const [url, setUrl] = useState("");
const [result, setResult] = useState("");
const [verificationUrl, setVerificationUrl] = useState("");
const [scholarshipText, setScholarshipText] = useState("");
const [textResult, setTextResult] = useState("");
const [textFindings, setTextFindings] = useState<string[]>([]);
const [recommendations, setRecommendations] = useState<string[]>([]);
const [riskScore, setRiskScore] = useState<number | null>(null);
const [riskLevel, setRiskLevel] = useState("");
  return (
    <main className="min-h-screen bg-[#090909] px-5 text-[#F5F0E5] sm:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between border-b border-[#D4AF37]/15 py-5">
        <Link href="/" className="text-xl font-bold">
          <span className="text-[#D4AF37]">◆</span> ScholarShield
        </Link>

        <Link
          href="/"
          className="text-sm text-[#A9A08D] hover:text-[#D4AF37]"
        >
          ← Back to Home
        </Link>
      </nav>

      <section className="mx-auto max-w-3xl py-16 sm:py-20">
        <p className="inline-block rounded-full border border-[#D4AF37]/25 px-4 py-2 text-xs tracking-wide text-[#E6C86E]">
          SCHOLARSHIP SECURITY CENTER
        </p>

        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
          Verify before you{" "}
          <span className="text-[#D4AF37]">apply.</span>
        </h1>

        <p className="mt-5 text-sm leading-7 text-[#A9A08D] sm:text-base">
          Check a scholarship website for suspicious signs before sharing
          your personal information or applying.
        </p>

        <div className="mt-10 rounded-3xl border border-[#D4AF37]/20 bg-[#15130F] p-6 sm:p-9">
          <h2 className="text-xl font-semibold">♢ Scholarship Scanner</h2>
          <p className="mt-2 text-sm text-[#A9A08D]">
            Website URL analysis
          </p>

          <label
            htmlFor="scholarship-url"
            className="mt-8 block text-sm font-medium"
          >
            Scholarship website URL
          </label>
          
            <input
            id="scholarship-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/scholarship"
            className="mt-3 w-full rounded-xl border border-[#D4AF37]/25 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37]"
            />

         
<button
  type="button"
  onClick={async() => {
    
const enteredUrl = url.trim();

if (!enteredUrl) {
  setResult("Please enter a scholarship website URL.");
  return;
}

try {
  const response = await fetch("/api/scan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: enteredUrl }),
  });

  const data = await response.json();
  setVerificationUrl(data.verificationUrl || "");
  
  setResult(data.status + "|" + data.message);
} catch {
  setResult("Unable to connect to the scanner API. Please try again.");
}

}}


     
  className="mt-5 w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black transition hover:bg-[#E0BD55]"
>
  Scan Scholarship Website
</button>



{result && (
  <div className="mt-5 rounded-xl border border-[#D4AF37]/25 bg-black/30 p-5">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xl text-[#D4AF37]">
        


{["warning", "unverified", "caution", "invalid"].includes(
  result.split("|")[0]
)
  ? "!"
  : "✓"}

      </span>
      <div>
        <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
          SCAN RESULT
        </p>
        <p className="mt-1 font-semibold text-[#F5F0E5]">
          

{result.split("|")[0] === "warning"
  ? "Suspicious Pattern Detected"
  : result.split("|")[0] === "official-domain-match"
    ? "Official Domain Match"
    : result.split("|")[0] === "unverified"
      ? "Unverified Domain"
      : result.split("|")[0] === "caution"
        ? "Caution Required"
        : result.split("|")[0] === "invalid"
          ? "Check Your Input"
          : "Scan Result"}

        </p>
      </div>
    </div>

    <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
  <p className="text-sm leading-6 text-[#C7C0B1]">
    {result.split("|").slice(1).join("|")}
  </p>

  {verificationUrl && (
    <a
      href={verificationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-sm text-[#D4AF37] underline"
    >
      Verify on Official Government Portal →
    </a>
  )}
</div>

    <p className="mt-4 text-xs leading-5 text-[#8C826C]">
      This is an automated preliminary check, not proof that a scholarship
      is safe or fraudulent. Verify the organization through official sources.
    </p>
  </div>
)}

          <div className="mt-6 rounded-xl border border-[#D4AF37]/15 p-4">
            <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
              SECURITY CHECKS
            </p>

            <div className="mt-4 space-y-3">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-sm text-[#C7C0B1]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#8C826C]">
            This page is currently a prototype. It does not yet detect
            real scholarship scams. Never enter passwords or banking details.
          </p>

          
        <div className="mt-8 rounded-3xl border border-[#D4AF37]/20 bg-[#15130F] p-6 sm:p-9">
          <h2 className="text-xl font-semibold">
            Scholarship Message Scanner
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#A9A08D]">
            Paste a scholarship message to check for potential warning signs.
          </p>

          <label
            htmlFor="scholarship-message"
            className="mt-6 block text-sm font-medium"
          >
            Scholarship offer or message
          </label>

          <textarea
            id="scholarship-message"
            value={scholarshipText}
            onChange={(e) => setScholarshipText(e.target.value)}
            placeholder="Paste the scholarship message here..."
            maxLength={10000}
            rows={6}
            className="mt-3 w-full rounded-xl border border-[#D4AF37]/25 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37]"
          />

          <button
            type="button"
            onClick={async () => {
              setTextResult("");
              setTextFindings([]);

              if (!scholarshipText.trim()) {
                setTextResult("Please paste a scholarship message to analyze.");
                return;
              }

              try {
                const response = await fetch("/api/analyze-text", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ text: scholarshipText }),
                });

                const data = await response.json();

                setTextResult(data.message || "Analysis completed.");
                setTextFindings(data.findings || []);
                setRecommendations(data.recommendations || []);
                setRiskScore(
                  typeof data.riskScore === "number" ? data.riskScore : null
                );
                setRiskLevel(data.riskLevel || "");
              } catch {
                setTextResult(
                  "Unable to connect to the text scanner. Please try again."
                );
              }
            }}
            className="mt-5 w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black transition hover:bg-[#E0BD55]"
          >
            Analyze Scholarship Message
          </button>

          {textResult && (
            <div className="mt-5 rounded-xl border border-[#D4AF37]/25 bg-black/30 p-5">
              <p className="text-sm leading-6 text-[#C7C0B1]">
                {textResult}
              </p>
            
{textResult && riskScore !== null && (
  <div className="mt-4 rounded-xl border border-[#D4AF37]/20 bg-white/[0.03] p-4">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-xs tracking-wider text-[#A9A08D]">
          PRELIMINARY RISK SCORE
        </p>
        <p className="mt-1 text-sm font-semibold capitalize text-[#D4AF37]">
          {riskLevel} risk
        </p>
      </div>

      <p className="text-2xl font-bold text-[#D4AF37]">
        {riskScore}/100
      </p>
    </div>

    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-[#D4AF37] transition-all"
        style={{ width: `${riskScore}%` }}
      />
    </div>

    <p className="mt-3 text-xs leading-5 text-[#8C826C]">
      This score reflects configured warning patterns, not the probability
      that the scholarship is fraudulent. A low score does not prove safety.
    </p>
  </div>
)}

              {textFindings.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#D4AF37]">
                  {textFindings.map((finding, index) => (
                    <li key={index}>{finding}</li>
                  ))}
                </ul>
              )}
            
            {recommendations.length > 0 && (
              <div className="mt-5 rounded-xl border border-[#D4AF37]/20 bg-white/[0.03] p-4">
                <h3 className="mb-3 font-semibold text-[#D4AF37]">
                  Recommended Actions
                </h3>

                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[#C7C0B1]">
                  {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
 
            </div>
          )}
        </div>

        </div>
      </section>
    </main>
  );
}
