import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";

export const metadata: Metadata = {
  title: "Product Commercials | AFTER THAT ENTERTAINMENT",
  description:
    "Product commercials, FMCG launch films, and high-impact digital advertising by AFTER THAT ENTERTAINMENT.",
  alternates: {
    canonical: "https://www.afterthat.in/work/product-commercials",
  },
};

export default function ProductCommercialsPage() {
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
