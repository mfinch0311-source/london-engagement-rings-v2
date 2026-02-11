
export interface Supplier {
  id: string;
  name: string;
  address: string;
  website?: string; // Optional URL
  description: string;
  googleRating: string | number;
  trustpilotRating?: string | number;
  rank: number;
  whyWeLikeIt?: string; // First-person editorial note
}

export interface LocationData {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  suppliers: Supplier[];
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
