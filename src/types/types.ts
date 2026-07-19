import type {LucideIcon} from "lucide-react";

export interface Property {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    priceRaw: number;
    subtitle: string;
    location: string;
    size: string;
    buildYear: number;
    bedrooms: number;
    bathrooms: number;
    type: string;
}

export interface CardProperty {
    id: number;
    title: string;
    description: string;
}

export interface Testimonial {
    id: number;
    name: string;
    location: string;
    avatar: string;
    rating: number;
    title: string;
    review: string;
}

export const fakeTestmonialst: Testimonial[] = [
    { id: 1, name: "Wade Warren", location: "USA, California", avatar: "https://i.pravatar.cc/48?img=1", rating: 5, title: "Exceptional Service!", review: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!" },
    { id: 2, name: "Emelie Thomson", location: "USA, Florida", avatar: "https://i.pravatar.cc/48?img=2", rating: 5, title: "Efficient and Reliable", review: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results." },
    { id: 3, name: "John Mans", location: "USA, Nevada", avatar: "https://i.pravatar.cc/48?img=3", rating: 5, title: "Trusted Advisors", review: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!" },
    { id: 4, name: "Sarah Johnson", location: "USA, New York", avatar: "https://i.pravatar.cc/48?img=4", rating: 5, title: "Outstanding Experience", review: "Working with Estatein was a pleasure from start to finish. They understood exactly what we were looking for and delivered beyond expectations." },
    { id: 5, name: "Michael Chen", location: "USA, Texas", avatar: "https://i.pravatar.cc/48?img=5", rating: 5, title: "Professional and Caring", review: "Estatein made the stressful process of buying a home feel manageable. Their team was always available to answer questions and provide guidance." },
    { id: 6, name: "Emily Davis", location: "USA, Washington", avatar: "https://i.pravatar.cc/48?img=6", rating: 5, title: "Highly Recommend!", review: "From the first consultation to the closing, Estatein was exceptional. Their market knowledge and negotiation skills saved us thousands." },
    { id: 7, name: "Robert Wilson", location: "USA, Arizona", avatar: "https://i.pravatar.cc/48?img=7", rating: 5, title: "Above and Beyond", review: "The team at Estatein went above and beyond to find us the perfect property. Their dedication to client satisfaction is truly unmatched." },
    { id: 8, name: "Lisa Martinez", location: "USA, Colorado", avatar: "https://i.pravatar.cc/48?img=8", rating: 5, title: "Dream Home Found!", review: "Thanks to Estatein, we finally found our dream home. The process was smooth, transparent, and stress-free. We are forever grateful!" },
    { id: 9, name: "David Thompson", location: "USA, Oregon", avatar: "https://i.pravatar.cc/48?img=9", rating: 5, title: "Seamless Process", review: "Estatein made buying our investment property incredibly easy. Their expertise in the market and attention to detail gave us full confidence." },
    { id: 10, name: "Amanda White", location: "USA, Georgia", avatar: "https://i.pravatar.cc/48?img=10", rating: 5, title: "Best Decision Ever", review: "Choosing Estatein was the best decision we made. Their team's passion for real estate and commitment to clients is evident in everything they do." },
];

export interface servicesCardProps {
    src:string;
    label: string;
    value?: string;
    href?: string
}

export interface Office {
    name: string;
    address: string;
    description: string;
    phone: string;
    email: string;
    location: string;
}

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    inquiryType: string;
    property: string;
    message: string;
    agree: boolean;
}

export interface PurchaseFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredLocation: string;
    propertyType: string;
    bathrooms: string;
    bedrooms: string;
    budget: string;
    contactMethod: "phone" | "email";
    contactMethodPhone: string;
    contactMethodEmail: string;
    message: string;
    agree: boolean;
}

export interface SubmitResult {
    success: boolean;
}

export interface ValuesProps {
    label: string;
    description: string;
    icon?: LucideIcon;
}

export interface ProcessStep {
    stepNumber: string;
    title: string;
    description: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    twitterUrl?: string;
    telegramUrl?: string;
}

export interface Client {
    name: string;
    since: string;
    domain: string;
    category: string;
    testimonial: string;
    websiteUrl?: string;
}

export interface Achievements {
    label: string;
    description: string;
}

export interface PropertyProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    priceRaw: number;
    bedrooms: number;
    bathrooms: number;
    type: string;
    subtitle: string;
    location: string;
    size: number;
    buildYear: number;
}

export interface SearchFilters {
    query: string;
    location: string;
    type: string;
    priceRange: number;
    sizeRange: number;
    buildYear: string;
}

export interface SearchBarProps {
    onSearch: (filters: SearchFilters) => void;
    loading: boolean;
}

export interface Props {
    filters: SearchFilters;
    onLoadingChange: (loading: boolean) => void;
    loading: boolean;
}

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role?: string;
}

export interface AuthState {
    token: string | null;
    user: AuthUser | null;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    fetchMe: () => Promise<void>;
    logout: () => void;
}
