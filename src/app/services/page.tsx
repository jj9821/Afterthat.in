import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { SEO_SERVICES, SEO_SERVICE_SLUGS } from "@/data/seo-services";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Agency Services | Branding, Advertising, Digital & Tech",
  description:
    "Explore AFTER THAT's integrated creative capabilities across brand strategy, commercial ad film production, performance digital marketing, web engineering, and PR across India.",
  alternates: {
    canonical: "https://www.afterthat.in/services",
  },
  openGraph: {
    title: "Agency Services | Branding, Advertising, Digital & Tech | AFTER THAT",
    description:
      "Explore AFTER THAT's integrated creative capabilities across brand strategy, commercial ad film production, performance digital marketing, web engineering, and PR across India.",
    url: "https://www.afterthat.in/services",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/portfolio/branding/dizzire/cover.webp",
        width: 1200,
        height: 630,
        alt: "AFTER THAT ENTERTAINMENT — Integrated Agency Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Services | Branding, Advertising, Digital & Tech | AFTER THAT",
    description:
      "Explore AFTER THAT's integrated creative capabilities across brand strategy, commercial ad film production, performance digital marketing, web engineering, and PR.",
    images: ["/portfolio/branding/dizzire/cover.webp"],
  },
};

export default function ServicesHubPage() {
  const servicesList = SEO_SERVICE_SLUGS.map((slug) => SEO_SERVICES[slug]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.afterthat.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.afterthat.in/services",
      },
    ],
  };

  const agencyFaqs = [
    {
      question: "Why choose an integrated agency over multiple specialist boutique vendors?",
      answer:
        "Hiring a separate branding studio, film crew, digital marketing agency, and software shop causes strategy drift, mismatched visual identities, finger-pointing when results lag, and massive coordination overhead. AFTER THAT unifies all five disciplines under single-point strategic leadership.",
    },
    {
      question: "Can we engage AFTER THAT for an individual service vertical rather than full-service?",
      answer:
        "Yes. While many clients partner with us on multi-disciplinary retainers, you can commission dedicated sprints for individual verticals such as Brand Identity, Commercial Ad Film Production, or Custom Website Engineering.",
    },
    {
      question: "Where are your production and technical teams located?",
      answer:
        "We operate three strategic hubs: Kochi (Kerala) for cinematic film production and regional strategy; Bangalore (Karnataka) for technology, software, and digital growth; and Ahmedabad (Gujarat) for commercial enterprise and FMCG packaging advisory.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agencyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CustomCursor />
      <Navbar />

      {/* Hero Header */}
      <header className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
            <span>// CAPABILITY DIRECTORY</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60 tracking-widest">
              KOCHI • BANGALORE • AHMEDABAD
            </span>
          </div>

          <h1 className="font-anton text-5xl sm:text-7xl md:text-9xl uppercase tracking-tight text-white leading-[0.9]">
            AGENCY <span className="text-[#F20D18]">SERVICES.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <p className="lg:col-span-8 font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-3xl leading-snug">
              We eliminate the friction of fragmented execution. Strategy, commercial film,
              performance marketing, bespoke web engineering, and public relations unified under
              one accountable standard.
            </p>

            <div className="lg:col-span-4 flex items-center lg:justify-end">
              <Link
                href="/#contact"
                className="py-3 px-6 bg-[#F20D18] hover:bg-white text-white hover:text-black font-anton text-base tracking-wider uppercase flex items-center gap-2 transition-colors duration-200"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 8 Core Service Verticals Grid */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // 08 CORE VERTICALS
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              SPECIALISED CAPABILITIES. <span className="text-[#F20D18]">INTEGRATED POWER.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((srv) => (
              <div
                key={srv.slug}
                className="bg-[#111111] border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-[#F20D18] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                    <span className="text-[#F20D18] font-bold tracking-widest uppercase">
                      VERTICAL // {srv.number}
                    </span>
                    <span className="text-white/50">{srv.timeline}</span>
                  </div>

                  <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="font-anton text-sm text-[#F20D18] tracking-wider uppercase">
                    {srv.tagline}
                  </p>

                  <p className="font-syne text-sm text-[#aaaaaa] leading-relaxed line-clamp-3">
                    {srv.narrativeLead}
                  </p>

                  <div className="pt-2 space-y-2 font-mono text-xs text-[#888888]">
                    <span className="block text-[10px] tracking-widest text-[#F20D18] uppercase">
                      SAMPLE DELIVERABLES:
                    </span>
                    <ul className="space-y-1">
                      {srv.deliverables[0]?.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D18]" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-white group-hover:text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2 transition-colors"
                  >
                    <span>EXPLORE VERTICAL IN DEPTH</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#F20D18] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Philosophy / Why Integrated */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#080808]">
        <div className="max-w-[1720px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // OPERATIONAL INTEGRITY
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              WHY FORWARD-THINKING BRANDS UNIFY WITH <span className="text-[#F20D18]">AFTER THAT.</span>
            </h2>
            <p className="font-syne text-sm sm:text-base text-white/70 leading-relaxed">
              We bridge the traditional divide between creative storytelling and quantitative
              technology. Our cross-functional squads operate under shared commercial benchmarks.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "SINGLE-POINT ACCOUNTABILITY",
                desc: "One leadership team accountable for the entire commercial trajectory, from brand identity to digital code.",
              },
              {
                title: "SEAMLESS ASSET SYNERGY",
                desc: "Your commercial video color grades match your digital web flagships, which align with your physical packaging.",
              },
              {
                title: "AI-ACCELERATED PRODUCTION",
                desc: "Deploying proprietary neural workflows to deliver campaign adaptations at 4x the velocity of traditional agencies.",
              },
              {
                title: "PAN-INDIA HUBS",
                desc: "Active operational presence in Kochi, Bangalore, and Ahmedabad supporting clients across national and global markets.",
              },
            ].map((box, i) => (
              <div key={i} className="bg-[#101010] border border-white/10 p-6 space-y-2">
                <span className="font-mono text-xs text-[#F20D18] font-bold">0{i + 1} //</span>
                <h3 className="font-anton text-lg tracking-wide uppercase text-white">
                  {box.title}
                </h3>
                <p className="font-syne text-xs text-[#888888] leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-[1720px] mx-auto w-full space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // AGENCY FAQS
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              COMMON QUESTIONS ON <span className="text-[#F20D18]">OUR SERVICES.</span>
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {agencyFaqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-white/10 p-6 space-y-2">
                <h3 className="font-anton text-lg sm:text-xl uppercase tracking-wide text-white">
                  {faq.question}
                </h3>
                <p className="font-syne text-sm text-[#aaaaaa] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Commission CTA */}
      <section className="py-24 px-5 sm:px-8 md:px-12 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
            // INITIATE COMMISSION
          </span>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            READY TO BUILD SOMETHING <span className="text-[#F20D18]">IMPOSSIBLE TO IGNORE?</span>
          </h2>
          <p className="font-syne text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Reach out directly to our leadership team or open the interactive commission terminal.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="py-3 px-8 bg-[#F20D18] hover:bg-white text-white hover:text-black font-anton text-lg tracking-wider uppercase transition-colors"
            >
              OPEN PROJECT TERMINAL
            </Link>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="py-3 px-8 border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              <span>EMAIL: {COMPANY_INFO.contact.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
