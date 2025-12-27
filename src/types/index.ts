export type Page = 'home' | 'about' | 'journey' | 'achievements' | 'gallery' | 'blog';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured: boolean;
  published_at: string;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}
