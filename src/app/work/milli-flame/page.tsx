import { Metadata } from "next";
import MilliFlameShowcaseClient from "../milli-flame-bistro-paris/MilliFlameShowcaseClient";

export const metadata: Metadata = {
  title: "MILLI FLAME — Parisian Dining & Café | AFTER THAT",
  description:
    "A distinctive restaurant identity built around a circular flame emblem, contemporary typography and a vibrant visual system. Paris, France.",
  alternates: {
    canonical: "https://www.afterthat.in/work/milli-flame-bistro-paris",
  },
};

export default function MilliFlameAliasPage() {
  return <MilliFlameShowcaseClient />;
}
