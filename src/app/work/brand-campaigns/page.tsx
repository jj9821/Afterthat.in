import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";

export const metadata: Metadata = {
  title: "Brand Campaigns | AFTER THAT ENTERTAINMENT",
  description:
    "Integrated advertising, digital marketing, and brand identity campaigns by AFTER THAT ENTERTAINMENT.",
  alternates: {
    canonical: "https://www.afterthat.in/work/brand-campaigns",
  },
};

export default function BrandCampaignsPage() {
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
