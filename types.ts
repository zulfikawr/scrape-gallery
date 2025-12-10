export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  tags: string[];
  views: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  sku: string;
  image: string;
}

export interface Snippet {
  id: number;
  language: string;
  title: string;
  code: string;
  description: string;
}

export interface Quote {
  id: number;
  text: string;
  author: string;
  source?: string;
  tags: string[];
}

export interface Person {
  id: number;
  name: string;
  role: string;
  email: string; // Fake emails
  location: string;
  bio: string;
}
