import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";

export const metadata: Metadata = {
  title: "Creative Photography & Editorial Visuals | AFTER THAT ENTERTAINMENT",
  description:
    "Editorial lookbooks, commercial product photography, and high-impact visual artwork by AFTER THAT ENTERTAINMENT.",
  alternates: {
    canonical: "https://www.afterthat.in/work/creative-photography",
  },
};

export default function CreativePhotographyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <div className="pt-24 sm:pt-32">
        <CreativeArchiveSection />
      </div>

      <Footer />
    </div>
  );
}
