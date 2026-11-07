export type FragranceCategory = 
  | 'all'
  | 'mens'
  | 'womens'
  | 'unisex'
  | 'luxury'
  | 'trending'
  | 'signature';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: FragranceCategory[];
  bottleSize: string;
  priceETB: number;
  inStock: boolean;
  stockStatus: string;
  isSampleData: boolean;
  sampleDataNotice?: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  scentProfile: {
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
  };
  concentration: string;
  featured?: boolean;
  trending?: boolean;
}

export interface CollectionCategory {
  id: FragranceCategory;
  title: string;
  subtitle: string;
  image: string;
  itemCount: number;
}
