import { Metadata } from "next";
import Link from "next/link";
import { Home, Compass, Briefcase, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found | AFTER THAT ENTERTAINMENT",
  description: "The requested route does not exist on the AFTER THAT ENTERTAINMENT network.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 md:px-12 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#F20D18]/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto w-full text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase bg-black/60 border border-white/10 px-4 py-1.5">
            <span>ERROR STATUS // 404</span>
          </div>

          <h1 className="font-anton text-7xl sm:text-9xl md:text-[12rem] uppercase tracking-tighter text-white leading-none">
            LOST IN <span className="text-[#F20D18]">SPACE.</span>
          </h1>

          <p className="font-syne text-base sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            The page or asset you are seeking has been moved, archived, or does not exist on our
            digital network.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs max-w-2xl mx-auto">
            <Link
              href="/"
              className="p-4 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
            >
              <Home className="w-4 h-4 text-[#F20D18]" />
              <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                RETURN HOME
              </span>
            </Link>

            <Link
              href="/services"
              className="p-4 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
            >
              <Compass className="w-4 h-4 text-[#F20D18]" />
              <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                SERVICES
              </span>
            </Link>

            <Link
              href="/work"
              className="p-4 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
            >
              <Briefcase className="w-4 h-4 text-[#F20D18]" />
              <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                CREATIVE ARCHIVE
              </span>
            </Link>

            <Link
              href="/#contact"
              className="p-4 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F20D18]" />
              <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                COMMISSION WORK
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
