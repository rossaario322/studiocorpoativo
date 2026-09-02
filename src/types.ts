export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  equipmentOrTools?: string[];
  iconName: string;
  isUpcoming?: boolean;
}

export interface PromoOption {
  title: string;
  description: string;
  discountPercentage: number;
  conditions: string[];
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  timeAgo: string;
  text: string;
  ownerReply?: string;
}

export interface StudioInfo {
  name: string;
  fullName: string;
  tagline: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    plusCode: string;
    fullFormatted: string;
  };
  phones: {
    mainWhatsApp: string;
    mapsPhone: string;
    alternatePhone: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    googleMapsUrl: string;
  };
  googleRating: {
    score: number;
    totalReviews: number;
  };
  colors: {
    primary: string;
    secondary: string;
  };
}
