export type VerificationStatus =
  | "VERIFIED_OFFICIAL"
  | "VERIFIED_THIRD_PARTY"
  | "NEEDS_MANUAL_REVIEW"
  | "NOT_FOUND";

export type ClientSourceType =
  | "official_website"
  | "wikimedia"
  | "brandfetch"
  | "vector_portal"
  | "extracted_playbook_vector"
  | "extracted_playbook_master"
  | "official_brand_guidelines"
  | "wordmark_placeholder";

export interface ClientLogo {
  id: string;
  name: string;
  slug: string;
  category: string;
  workScope?: string;
  logoPath: string | null;
  originalFormat: "svg" | "png" | "typography";
  sourceUrl: string;
  sourceType: ClientSourceType;
  verificationStatus: VerificationStatus;
  caseStudySlug: string | null;
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  } | null;
  description: string;
  notes: string;
}
