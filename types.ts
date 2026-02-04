export interface Project {
  id: number;
  name: string;
  client: string;
  concessionaire: string;
  status: 'Completed' | 'Ongoing';
  value?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Signage' | 'Furniture' | 'Technology' | 'Lighting';
}

export interface Client {
  name: string;
  logo?: string; 
}