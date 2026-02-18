export interface FaqItem {
  question: string;
  answer: string;
  category: 'price' | 'product' | 'shipping' | 'patent';
}

export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface ComplianceRule {
  category: string;
  forbidden: string[];
  allowed: string[];
  reason: string;
}

export interface SeoMeta {
  page: string;
  title: string;
  description: string;
  keywords: string[];
}