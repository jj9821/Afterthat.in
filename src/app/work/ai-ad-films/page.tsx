import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";

export const metadata: Metadata = {
  title: "AI Advertising Films | AFTER THAT ENTERTAINMENT",
  description:
    "Explore AI-powered commercial advertising films, fashion spots, and cinematic storytelling produced by AFTER THAT ENTERTAINMENT.",
  alternates: {
    canonical: "https://www.afterthat.in/work/ai-ad-films",
  },
};

export default function AIAdFilmsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <div className="pt-24 sm:pt-32">
        <AIAdFilmsSection />
      </div>

      <Footer />
    </div>
  );
}
