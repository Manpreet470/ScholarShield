
import { NextResponse } from "next/server";


const suspiciousPatterns = [
  {
    pattern: /\b(registration fee|processing fee|release fee|pay now|send money|pay to claim)\b/i,
    reason: "The message mentions a possible upfront payment demand.",
    action: "Do not pay immediately. Confirm any fee requirement through the official scholarship portal.",
    severity: 2,
  },
  {
    pattern: /\b(guaranteed scholarship|scholarship is guaranteed|your scholarship is guaranteed|100% guaranteed|instant scholarship|claim your prize|free money)\b/i,
    reason: "The message makes an unusually strong or potentially misleading promise.",
    action: "Check the scholarship eligibility criteria and announcement on an official source.",
    severity: 2,
  },
  {
    pattern: /\b(share your otp|send otp|password|banking password|upi pin)\b/i,
    reason: "The message may be requesting sensitive authentication or banking information.",
    action: "Never share your OTP, password, or UPI PIN with someone claiming to release a scholarship.",
    severity: 3,
  },
  {
    pattern: /\b(urgent|immediately|limited time|act now|last chance)\b/i,
    reason: "The message uses urgency that may pressure the applicant.",
    action: "Pause before acting and independently verify the deadline through the official scholarship portal.",
    severity: 1,
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = body.text;

    if (typeof text !== "string" || !text.trim()) {
      return NextResponse.json(
        {
          status: "invalid",
          message: "Please paste a scholarship message to analyze.",
          findings: [],
        },
        { status: 400 }
      );
    }

    if (text.length > 10000) {
      return NextResponse.json(
        {
          status: "invalid",
          message: "The message is too long. Please use fewer than 10,000 characters.",
          findings: [],
        },
        { status: 400 }
      );
    }

    const matchedPatterns = suspiciousPatterns.filter(
  (item) => item.pattern.test(text)
);

const findings = matchedPatterns.map((item) => item.reason);

const recommendations = matchedPatterns.map((item) => item.action);
      
        const totalSeverity = matchedPatterns.reduce(
  (total, item) => total + item.severity,
  0
);

const riskScore = Math.min(
  Math.round((totalSeverity / 8) * 100),
  100
);
const riskLevel =
  riskScore >= 60 || matchedPatterns.some((item) => item.severity === 3)
    ? "high"
    : riskScore >= 25
      ? "medium"
      : "low";

    if (findings.length > 0) {
      return NextResponse.json({
        status: "warning",
        message:
          "Potential warning signs were found. Review the findings and verify the offer through an official source.",
        findings,
        recommendations,
        riskScore,
        riskLevel,

      });
    }

    return NextResponse.json({
  status: "no-known-patterns",
  message:
    "No configured warning phrases were detected. This does not prove the scholarship is genuine.",
  findings: [],
  riskScore: 0,
  riskLevel: "low",
});
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "Unable to analyze the message. Please try again.",
        findings: [],
      },
      { status: 500 }
    );
  }
}
