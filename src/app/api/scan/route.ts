
import { NextResponse } from "next/server";

const trustedScholarshipDomains = [
  "scholarships.gov.in",
];

const suspiciousWords =
  /free-money|claim-prize|pay-registration|guaranteed-award|urgent-payment|registration-fee|processing-fee|guaranteed-scholarship|pay-to-claim|limited-time-award|scholarship-fee|pay-now|application-fee|release-fee|send-money|claim-your-scholarship|instant-scholarship|100%-guaranteed/i;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const url = body.url;

    if (typeof url !== "string" || !url.trim()) {
      return NextResponse.json(
        { status: "invalid", message: "Please enter a website URL." },
        { status: 400 }
      );
    }

    let parsedUrl: URL;

    try {
      parsedUrl = new URL(url.trim());
    } catch {
      return NextResponse.json(
        { status: "invalid", message: "Enter a valid URL, such as https://example.com." },
        { status: 400 }
      );
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return NextResponse.json(
        { status: "invalid", message: "Only HTTP and HTTPS URLs are accepted." },
        { status: 400 }
      );
    }

    const hostname = parsedUrl.hostname.toLowerCase();
    const isTrustedDomain =
    trustedScholarshipDomains.some(
    (domain) => hostname === domain
  );

    if (suspiciousWords.test(url)) {
      return NextResponse.json({
        status: "warning",
        message:
       "Suspicious phrases were found in this URL. Requests for registration, processing, or release fees are warning signs. Do not pay until you independently verify the scholarship through an official source.",
      });
    }

    if (isTrustedDomain) {
      return NextResponse.json({
        status: "official-domain-match",
        message:
          "The domain matches our current trusted list. This does not verify every scholarship offer on the website.",
        verificationUrl: "https://scholarships.gov.in/",
      });
    }

    if (parsedUrl.protocol !== "https:") {
      return NextResponse.json({
        status: "caution",
        message:
          "This website does not use HTTPS. Its legitimacy has not been verified.",
      });
    }

    return NextResponse.json({
      status: "unverified",
      message:
        "This domain is not in our current trusted list. Verify it through an official source before applying.",
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Unable to process the scan request." },
      { status: 500 }
    );
  }
}
