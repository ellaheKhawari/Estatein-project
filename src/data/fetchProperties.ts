import type { PropertyProps } from "../types/types";
import { PROPERTY_DATA, UNSPLASH_IDS } from "./index";

export function buildUnsplashUrl(photoId: string): string {
    return `https://images.unsplash.com/photo-${photoId}?w=800&q=80&fit=crop&auto=format`;
}

export async function fetchProperties(): Promise<PropertyProps[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    return PROPERTY_DATA.map((item, i) => ({
        id: i + 1,
        ...item,
        image: buildUnsplashUrl(UNSPLASH_IDS[i % UNSPLASH_IDS.length]),
    }));
}