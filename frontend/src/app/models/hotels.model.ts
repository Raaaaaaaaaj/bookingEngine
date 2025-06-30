// models/hotel.model.ts (recommended)
export interface Hotel {
    id: string;
    name: string;
    location: string;
    address: string;
    rating: number;
    ratingLabel: string;
    totalRatings: number;
    isCoupleFriendly: boolean;
    offers: string[];
    highlights: string[];
    images: string[];
    price: {
        original: number;
        discounted: number;
        taxesAndFees: number;
    };
    ctaText: string;
    // room: Room[];    
}
