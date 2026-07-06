import type {ContactFormValues, PropertyProps, PurchaseFormValues, SearchFilters, TeamMember} from "../types/types.ts";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

export const stats = [
    { label: "Happy Clients", value: "200+" },
    { label: "Properties Listed", value: "10K+" },
    { label: "Years Experience", value: "16+" },
];

export const TITLES = [
    "How do I search for properties on Estatein?", "What documents do I need to sell my property through Estatein?", "How can I contact an Estatein agent?",
    "What documents do I need to sell my property through Estatein?", "What documents do I need to sell my property through Estatein?",
    "How can I contact an Estatein agent/", "How do I search for properties on Estatein?", "What documents do I need to sell my property through Estatein?",
];

export const UNSPLASH_IDS = [
    "1613977257363-707ba9ef82ae",
    "1600596542815-ffad4c1539a9",
    "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c",
    "1512917774080-9991f1c4c750",
    "1600566753190-17f0baa2a6c3",
    "1600047509807-ba8f99d2cdde",
    "1583608205776-bfd35f0d9f83",
    "1570129477492-45c003446571",
    "1580587771525-78b9dba3b914",
    "1599619351208-3e20b6ea5044",
    "1502672260266-1c1ef2d93688",
    "1628744448840-55bdb2497bd4",
    "1592595896551-12b371d546d5",
    "1600585154340-be6161a56a0c",
    "1558618666-fcd25c85cd64",
    "1554995207-c18c203602cb",
    "1484154218962-a197022b5858",
    "1600210492493-0966e7abe0a8",
    "1567496898669-ee935f5f647a",
    "1560448204-e02f11c3d0e2",
    "1574362848149-11496d93a7c7",
    "1523217582562-09d05ba79d68",
    "1572120360610-d971b57d0c70",
    "1493809842364-78817add7ffb",
    "1600210491892-03d54c45bb45",
    "1545324418-cc1a3fa10c00",
    "1522708323590-d24dbb6b0267",
    "1560185893-a55cbc8c57e8",
    "1449844908441-8829872d2607",
    "1518780664697-55e3ad937233",
    "1510627498534-cf7e6002a3b4",
    "1542314831-068cd1dbfeeb",
    "1587582423116-ec07b6651c90",
    "1614624532983-4ce03382d63d",
    "1600573472592-401b489a3cdc",
    "1616594039964-ae9021a400a0",
    "1598228723793-52759bba239c",
    "1577495508326-19a1b3cf65b9",
    "1568605114967-8130f3a36994",
];

export const PROPERTY_DATA: Omit<PropertyProps, "id" | "image">[] = [
    { title: "Seaside Serenity Villa", subtitle: "Coastal Escapes – Where Waves Beckon", description: "Wake up to the soothing melody of waves. This beachfront villa offers panoramic ocean views, a private infinity pool, and direct beach access — a rare gem on the Malibu coastline.", price: "$2,850,000", priceRaw: 2_850_000, bedrooms: 5, bathrooms: 4, type: "Villa", location: "Los Angeles", size: 4200, buildYear: 2022 },
    { title: "Metropolitan Haven", subtitle: "Urban Oasis – Life in the Heart of the City", description: "Immerse yourself in the energy of the city. This modern apartment sits in a prime downtown location with floor-to-ceiling windows and access to world-class amenities.", price: "$1,250,000", priceRaw: 1_250_000, bedrooms: 3, bathrooms: 2, type: "Apartment", location: "New York", size: 1800, buildYear: 2021 },
    { title: "Rustic Retreat Cottage", subtitle: "Countryside Charm – Escape to Nature's Embrace", description: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills with exposed timber beams, a stone fireplace, and a vast private garden.", price: "$580,000", priceRaw: 580_000, bedrooms: 3, bathrooms: 2, type: "Cottage", location: "Chicago", size: 1600, buildYear: 2019 },
    { title: "Skyline Penthouse", subtitle: "Above the City – Luxury Redefined", description: "Commanding 270° views of the city skyline, this exceptional penthouse features a wraparound terrace, chef's kitchen, and private rooftop garden on the 48th floor.", price: "$4,100,000", priceRaw: 4_100_000, bedrooms: 4, bathrooms: 3, type: "Penthouse", location: "New York", size: 3500, buildYear: 2023 },
    { title: "Garden View Townhouse", subtitle: "Urban Living – Space and Elegance", description: "A beautifully designed townhouse tucked into a leafy neighborhood. Enjoy three floors of thoughtfully designed living space with a private courtyard and rooftop terrace.", price: "$920,000", priceRaw: 920_000, bedrooms: 4, bathrooms: 3, type: "Townhouse", location: "Seattle", size: 2800, buildYear: 2020 },
    { title: "Lakeshore Manor", subtitle: "Waterfront Living – Peace and Prestige", description: "This grand manor sits directly on the lakeshore, offering a private dock, manicured grounds, and sweeping water views from every principal room.", price: "$3,400,000", priceRaw: 3_400_000, bedrooms: 6, bathrooms: 5, type: "Villa", location: "Chicago", size: 5200, buildYear: 2018 },
    { title: "Urban Loft Studio", subtitle: "City Core – Contemporary & Compact", description: "A chic industrial loft in the heart of the arts district. Polished concrete floors, exposed brick, and soaring 14ft ceilings create a uniquely inspiring living space.", price: "$650,000", priceRaw: 650_000, bedrooms: 1, bathrooms: 1, type: "Apartment", location: "Houston", size: 900, buildYear: 2021 },
    { title: "Hillside Paradise", subtitle: "Elevated Living – Views Without Limits", description: "Perched on a sun-drenched hillside, this contemporary home offers breathtaking valley views, an outdoor kitchen, and a negative-edge pool that seems to spill into the horizon.", price: "$2,100,000", priceRaw: 2_100_000, bedrooms: 4, bathrooms: 3, type: "Villa", location: "Los Angeles", size: 3800, buildYear: 2022 },
    { title: "Coastal Dream Home", subtitle: "By the Shore – Sun, Sand & Style", description: "Steps from a pristine white-sand beach, this light-filled home features open-plan living, a covered lanai, and lush tropical landscaping for the ultimate coastal lifestyle.", price: "$1,750,000", priceRaw: 1_750_000, bedrooms: 4, bathrooms: 3, type: "Villa", location: "Miami", size: 3100, buildYear: 2023 },
    { title: "City Center Flat", subtitle: "Prime Location – Everything at Your Doorstep", description: "A sophisticated apartment in an iconic building at the very center of the city. Walk to restaurants, galleries, and parks from this supremely well-connected address.", price: "$875,000", priceRaw: 875_000, bedrooms: 2, bathrooms: 2, type: "Apartment", location: "New York", size: 1200, buildYear: 2020 },
    { title: "Pacific Ridge Villa", subtitle: "Clifftop Seclusion – Where Sky Meets Sea", description: "A dramatic clifftop villa designed by an award-winning architect, featuring cantilevered terraces, a glass bridge, and uninterrupted Pacific Ocean views.", price: "$5,200,000", priceRaw: 5_200_000, bedrooms: 5, bathrooms: 5, type: "Villa", location: "Los Angeles", size: 4800, buildYear: 2023 },
    { title: "The Penthouse at Meridian", subtitle: "Full-Floor Living – Sky-High Luxury", description: "Occupying the entire top floor of the Meridian tower, this spectacular penthouse comes with a private elevator, wine cellar, and 360° panoramic city views.", price: "$6,800,000", priceRaw: 6_800_000, bedrooms: 5, bathrooms: 5, type: "Penthouse", location: "New York", size: 5500, buildYear: 2022 },
    { title: "Emerald Cottage", subtitle: "Hidden Away – Forest & Tranquility", description: "Tucked into a private woodland clearing, this enchanting cottage blends rustic charm with modern comforts — the perfect sanctuary for those who value peace and nature.", price: "$420,000", priceRaw: 420_000, bedrooms: 2, bathrooms: 1, type: "Cottage", location: "Seattle", size: 1100, buildYear: 2018 },
    { title: "Harbour View Townhouse", subtitle: "Dockside Living – Vibrant and Connected", description: "Located in a coveted harbour precinct, this sleek townhouse enjoys water views, a private garage, and easy access to the best dining and retail the city has to offer.", price: "$1,380,000", priceRaw: 1_380_000, bedrooms: 3, bathrooms: 3, type: "Townhouse", location: "Miami", size: 2400, buildYear: 2021 },
    { title: "Desert Modern Estate", subtitle: "Sun-Drenched Serenity – A Bold Statement", description: "An architectural showpiece set against a dramatic desert landscape. Floor-to-ceiling glass walls flood the interior with light, while the outdoor pavilion and pool invite year-round living.", price: "$2,950,000", priceRaw: 2_950_000, bedrooms: 5, bathrooms: 4, type: "Villa", location: "Houston", size: 4400, buildYear: 2022 },
    { title: "Soho Loft Residence", subtitle: "Cultural Hub – Art, Design & Energy", description: "A sprawling loft in Soho's most sought-after building, featuring original cast-iron columns, artist-grade skylights, and an open layout that's perfect for entertaining.", price: "$3,100,000", priceRaw: 3_100_000, bedrooms: 3, bathrooms: 2, type: "Apartment", location: "New York", size: 2600, buildYear: 2019 },
    { title: "Bayfront Penthouse", subtitle: "Bay Living – Iconic & Iconic", description: "A rarely available full-floor penthouse overlooking the bay, complete with a private pool deck, outdoor kitchen, and direct access to a curated collection of resident services.", price: "$7,500,000", priceRaw: 7_500_000, bedrooms: 5, bathrooms: 5, type: "Penthouse", location: "Miami", size: 6000, buildYear: 2023 },
    { title: "Whispering Pines Cottage", subtitle: "Forest Hideaway – Pure Restoration", description: "A hand-crafted log cabin retreat surrounded by towering pine trees. The perfect weekend escape or full-time sanctuary, with a wraparound porch and bubbling hot tub.", price: "$355,000", priceRaw: 355_000, bedrooms: 2, bathrooms: 1, type: "Cottage", location: "Seattle", size: 950, buildYear: 2017 },
    { title: "Riviera Terrace Villa", subtitle: "Mediterranean Glamour – Timeless Beauty", description: "Inspired by the French Riviera, this sun-washed villa features terracotta tiles, olive tree gardens, an outdoor dining terrace, and a mosaic-tiled pool with sea glimpses.", price: "$3,800,000", priceRaw: 3_800_000, bedrooms: 5, bathrooms: 4, type: "Villa", location: "Miami", size: 4600, buildYear: 2021 },
    { title: "The Chelsea Townhouse", subtitle: "Art District Living – Sophistication & Culture", description: "A five-story townhouse on a tree-lined Chelsea street, offering generous proportions, a private garden, and interiors finished to the highest gallery-quality standard.", price: "$4,600,000", priceRaw: 4_600_000, bedrooms: 5, bathrooms: 4, type: "Townhouse", location: "New York", size: 4900, buildYear: 2020 },
    { title: "Sunset Canyon Villa", subtitle: "Golden Hour Every Day – Spectacular Views", description: "Carved into a canyon hillside, this dramatic villa captures golden sunsets from every room. The terraced garden, outdoor cinema, and resort pool make it truly one of a kind.", price: "$3,300,000", priceRaw: 3_300_000, bedrooms: 4, bathrooms: 4, type: "Villa", location: "Los Angeles", size: 4100, buildYear: 2023 },
    { title: "Lakeside Pines Cottage", subtitle: "Peaceful Waters – Your Weekend Escape", description: "A charming lakeside cottage with its own private dock and kayak launch. Sun-bleached timber interiors, a wraparound deck, and the sound of lapping water define life here.", price: "$495,000", priceRaw: 495_000, bedrooms: 3, bathrooms: 2, type: "Cottage", location: "Chicago", size: 1300, buildYear: 2018 },
    { title: "Midtown Apex Apartment", subtitle: "Business Class Living – Effortless Commute", description: "Steps from Grand Central, this high-floor apartment combines polished marble, custom cabinetry, and city views that make the daily grind feel entirely worthwhile.", price: "$1,900,000", priceRaw: 1_900_000, bedrooms: 3, bathrooms: 2, type: "Apartment", location: "New York", size: 2000, buildYear: 2022 },
    { title: "Brickell Bay Penthouse", subtitle: "Miami's Crown Jewel – Live at the Top", description: "The ultimate in Miami luxury: a full-floor penthouse in Brickell with a 5,000 sqft wraparound terrace, private plunge pool, and unobstructed Biscayne Bay views.", price: "$8,900,000", priceRaw: 8_900_000, bedrooms: 6, bathrooms: 5, type: "Penthouse", location: "Miami", size: 7000, buildYear: 2023 },
    { title: "Fremont Row Townhouse", subtitle: "Seattle Cool – Walkable & Welcoming", description: "A modern townhouse in Fremont's beloved neighborhood. Rooftop deck with mountain glimpses, an open-plan kitchen, and EV charging in the private garage.", price: "$1,050,000", priceRaw: 1_050_000, bedrooms: 3, bathrooms: 3, type: "Townhouse", location: "Seattle", size: 2200, buildYear: 2021 },
    { title: "Montecito Estate", subtitle: "Celebrity Neighborhood – Private & Prestigious", description: "Set behind private gates in Montecito, this sprawling estate features guest quarters, a professional kitchen, tennis court, and mature gardens that guarantee complete privacy.", price: "$9,500,000", priceRaw: 9_500_000, bedrooms: 7, bathrooms: 6, type: "Villa", location: "Los Angeles", size: 8500, buildYear: 2020 },
    { title: "The Houston Pied-à-Terre", subtitle: "Pied-à-Terre Perfection – Lock & Leave", description: "An impeccably appointed apartment in the Galleria district — the ideal city base for the frequent traveller, with concierge services, a rooftop pool, and valet parking.", price: "$720,000", priceRaw: 720_000, bedrooms: 2, bathrooms: 2, type: "Apartment", location: "Houston", size: 1400, buildYear: 2022 },
    { title: "Windy Pines Retreat", subtitle: "Highland Charm – Seasons Change, Comfort Stays", description: "A beautifully restored stone cottage on five private acres, with original fireplaces, flagstone floors, and a newly added glass extension opening onto rolling countryside.", price: "$610,000", priceRaw: 610_000, bedrooms: 3, bathrooms: 2, type: "Cottage", location: "Chicago", size: 1700, buildYear: 2019 },
    { title: "Harbor Hill Townhouse", subtitle: "Panoramic Harbor Views – Every Single Day", description: "A rare harbor-front townhouse with a private terrace and sweeping views across the water. Walk to ferry terminals, waterfront dining, and vibrant weekend markets.", price: "$1,680,000", priceRaw: 1_680_000, bedrooms: 4, bathrooms: 3, type: "Townhouse", location: "Seattle", size: 2700, buildYear: 2021 },
    { title: "Starlight Penthouse", subtitle: "Under the Stars – Chicago's Finest Address", description: "On a clear night, the city stretches to the horizon from this dazzling penthouse. A private observatory dome, chef's kitchen, and lap pool complete a truly once-in-a-generation offering.", price: "$5,700,000", priceRaw: 5_700_000, bedrooms: 4, bathrooms: 4, type: "Penthouse", location: "Chicago", size: 4700, buildYear: 2022 },
    { title: "Coconut Grove Villa", subtitle: "Tropical Luxury – Lush and Laid Back", description: "Hidden among towering banyan trees in Coconut Grove, this lush villa exudes effortless tropical elegance, with a saltwater pool, outdoor shower, and a lanai for alfresco dining.", price: "$2,400,000", priceRaw: 2_400_000, bedrooms: 4, bathrooms: 3, type: "Villa", location: "Miami", size: 3600, buildYear: 2021 },
    { title: "South Loop Loft", subtitle: "Museum Campus Adjacent – Culture at Your Door", description: "An expansive soft-loft in Chicago's South Loop with polished concrete, 12ft ceilings, and a private balcony overlooking Grant Park and the shimmering lakefront.", price: "$895,000", priceRaw: 895_000, bedrooms: 2, bathrooms: 2, type: "Apartment", location: "Chicago", size: 1600, buildYear: 2020 },
    { title: "Magnolia Cottage", subtitle: "Southern Warmth – History and Heart", description: "A picture-perfect cottage shaded by magnolia trees, with a covered porch swing, claw-foot tubs, and a sunny kitchen garden — country living at its most romantic.", price: "$390,000", priceRaw: 390_000, bedrooms: 2, bathrooms: 1, type: "Cottage", location: "Houston", size: 1050, buildYear: 2017 },
    { title: "West Village Townhouse", subtitle: "New York Classic – Brownstone Beauty", description: "A meticulously restored four-storey townhouse on one of the West Village's most coveted blocks. Original fireplaces, a landscaped garden, and a wine cellar await the discerning buyer.", price: "$7,200,000", priceRaw: 7_200_000, bedrooms: 5, bathrooms: 4, type: "Townhouse", location: "New York", size: 5000, buildYear: 2018 },
    { title: "Seacliff Estate", subtitle: "Ocean Bluff – Dramatic and Timeless", description: "A grand estate perched on the Pacific bluffs, where the sound of the ocean is constant and the views are infinite. A heated pool, spa, and tennis court complete the grounds.", price: "$6,100,000", priceRaw: 6_100_000, bedrooms: 6, bathrooms: 5, type: "Villa", location: "Los Angeles", size: 6800, buildYear: 2019 },
    { title: "Uptown Charlotte Apartment", subtitle: "New South Living – Vibrant and Forward", description: "A sleek high-rise apartment in Uptown Houston's most dynamic address, with access to a sky-lounge, fitness centre, and a rooftop infinity pool with downtown panoramas.", price: "$780,000", priceRaw: 780_000, bedrooms: 2, bathrooms: 2, type: "Apartment", location: "Houston", size: 1350, buildYear: 2022 },
    { title: "Mercer Island Villa", subtitle: "Island Serenity – Minutes to Downtown", description: "A stunning waterfront villa on Mercer Island, offering a private beach, boat lift, and seamless indoor-outdoor living in a setting of extraordinary natural beauty.", price: "$4,400,000", priceRaw: 4_400_000, bedrooms: 5, bathrooms: 4, type: "Villa", location: "Seattle", size: 4900, buildYear: 2022 },
    { title: "River North Penthouse", subtitle: "Seen and Envied – Chicago's River District", description: "A spectacular duplex penthouse with a double-height living room and panoramic views stretching across the Chicago River, the loop, and Lake Michigan beyond.", price: "$4,900,000", priceRaw: 4_900_000, bedrooms: 4, bathrooms: 4, type: "Penthouse", location: "Chicago", size: 4300, buildYear: 2021 },
    { title: "Pinecrest Cottage", subtitle: "Mountain Air – Pure and Restorative", description: "A cosy mountain cottage with a wood-burning stove, exposed pine ceilings, and a hot tub on the deck. Direct trail access from the property for hiking and snowshoeing.", price: "$460,000", priceRaw: 460_000, bedrooms: 2, bathrooms: 1, type: "Cottage", location: "Seattle", size: 980, buildYear: 2018 },
    { title: "Capitol Hill Townhouse", subtitle: "Historic Heart – Walkable and Wonderful", description: "A beautifully updated Victorian townhouse steps from the Capitol Hill dining and nightlife scene. Original details preserved throughout, with a chic modern addition at the rear.", price: "$1,150,000", priceRaw: 1_150_000, bedrooms: 3, bathrooms: 2, type: "Townhouse", location: "Seattle", size: 2100, buildYear: 2019 },
    { title: "Biscayne Bay Villa", subtitle: "Bayfront Grandeur – A Miami Legend", description: "A landmark Biscayne Bay estate set on an oversized lot with 120ft of direct bay frontage. The infinity-edge pool and boat dock make this a paradise for water enthusiasts.", price: "$5,500,000", priceRaw: 5_500_000, bedrooms: 6, bathrooms: 5, type: "Villa", location: "Miami", size: 5800, buildYear: 2020 },
];

export const PRICE_RANGES = [
    { label: "Any Price", min: 0, max: Infinity },
    { label: "Under $300k", min: 0, max: 300_000 },
    { label: "$300k – $600k", min: 300_000, max: 600_000 },
    { label: "$600k – $1M", min: 600_000, max: 1_000_000 },
    { label: "Over $1M", min: 1_000_000, max: Infinity },
] as const;

export const SIZE_RANGES = [
    { label: "Any Size", min: 0, max: Infinity },
    { label: "Under 1,000 sqft", min: 0, max: 1000 },
    { label: "1,000 – 2,000 sqft", min: 1000, max: 2000 },
    { label: "2,000 – 4,000 sqft", min: 2000, max: 4000 },
    { label: "Over 4,000 sqft", min: 4000, max: Infinity },
] as const;

export const SUBTITLES:string[] = [
    "Coastal Escapes - Where Waves Beckon",
    "Urban Oasis - Life in the Heart of the City",
    "Countryside Charm - Escape to Nature's Embrace",
    "Skyline Living - Above the City",
    "Garden Retreat - Peace and Tranquility",
];

export const PROPERTY_TYPES = ["Villa", "Apartment", "Cottage", "Penthouse", "Townhouse"] as const;

export const LOCATIONS = ["New York", "Los Angeles", "Miami", "Chicago", "Houston", "Seattle"] as const;

export const BUILD_YEARS = ["Any Year", "2024", "2023", "2022", "2021", "2020", "Before 2020"] as const;

export const DEFAULT_FILTERS: SearchFilters = {
    query: "",
    location: "",
    type: "",
    priceRange: 0,
    sizeRange: 0,
    buildYear: "Any Year",
};

export const defaultValues: ContactFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    property: "",
    message: "",
    agree: false,
};

export const BATHROOMS = ["1", "2", "3", "4", "5+"];

export const BEDROOMS = ["1", "2", "3", "4", "5+"];

export const BUDGETS = [
    { label: "Under $100,000", value: "under_100k" },
    { label: "$100,000 – $300,000", value: "100k_300k" },
    { label: "$300,000 – $600,000", value: "300k_600k" },
    { label: "$600,000 – $1,000,000", value: "600k_1m" },
    { label: "Over $1,000,000", value: "over_1m" },
];

export const PurchaseDefaultValues: PurchaseFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredLocation: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
    contactMethod: "phone",
    contactMethodPhone: "",
    contactMethodEmail: "",
    message: "",
    agree: false,
};

export const team: TeamMember[] = [
    {
        name: "Maz Mitchell",
        role: "Founder",
        image: team1,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "Sarah Johnson",
        role: "Chief Real Estate Officer",
        image: team2,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "David Brown",
        role: "Head of Property Management",
        image: team3,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "Michael Turner",
        role: "Legal Counsel",
        image: team4,
        twitterUrl: "#",
        telegramUrl: "#",
    },
];