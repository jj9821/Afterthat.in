import { Metadata } from "next";
import DizzireShowcaseClient from "../dizzire-silk-and-sarees/DizzireShowcaseClient";

export const metadata: Metadata = {
  title: "DIZZIRE SILK AND SAREES — Elegance Woven Into Every Thread | AFTER THAT",
  description:
    "A contemporary fashion identity inspired by the elegance of Indian silk, combining distinctive visual symbolism, editorial campaign imagery and retail applications.",
  alternates: {
    canonical: "https://www.afterthat.in/work/dizzire-silk-and-sarees",
  },
};

export default function DizzireShortSlugPage() {
  return <DizzireShowcaseClient />;
}
