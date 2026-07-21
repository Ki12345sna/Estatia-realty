export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  type: "Villa" | "Penthouse" | "Apartment" | "Estate" | "Chalet";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  tag?: string;
  description: string;
  gallery: string[];
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "p-01",
    title: "Serenity Cliff Villa",
    location: "Malibu, California",
    city: "Malibu",
    price: 8250000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    image: "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    tag: "New",
    description:
      "Perched on the cliffside with panoramic ocean views, Serenity Cliff Villa blends sculptural architecture with an infinity edge pool and open living pavilions.",
    gallery: [
      "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/8134752/pexels-photo-8134752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    featured: true,
  },
  {
    id: "p-02",
    title: "Azure Horizon Estate",
    location: "Bodrum, Turkey",
    city: "Bodrum",
    price: 6480000,
    type: "Estate",
    bedrooms: 6,
    bathrooms: 7,
    area: 7400,
    image: "https://images.pexels.com/photos/31817160/pexels-photo-31817160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    tag: "Exclusive",
    description:
      "An oceanfront estate wrapped in glass, with terraced gardens cascading toward a private infinity pool overlooking the Aegean coastline.",
    gallery: [
      "https://images.pexels.com/photos/31817160/pexels-photo-31817160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    featured: true,
  },
  {
    id: "p-03",
    title: "Obsidian Sky Penthouse",
    location: "Dubai Marina, UAE",
    city: "Dubai",
    price: 12500000,
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    area: 5300,
    image: "https://images.pexels.com/photos/35295989/pexels-photo-35295989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    tag: "Penthouse",
    description:
      "A sky-high sanctuary overlooking the marina skyline, featuring a private rooftop lounge, smart glass walls, and 270-degree city views.",
    gallery: [
      "https://images.pexels.com/photos/35295989/pexels-photo-35295989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7005270/pexels-photo-7005270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/17007767/pexels-photo-17007767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    featured: true,
  },
  {
    id: "p-04",
    title: "The Hillside Retreat",
    location: "Aspen, Colorado",
    city: "Aspen",
    price: 5390000,
    type: "Chalet",
    bedrooms: 5,
    bathrooms: 5,
    area: 5800,
    image: "https://images.pexels.com/photos/7031411/pexels-photo-7031411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "A timber-and-stone mountain chalet framed by pine forests, offering warm interiors, a private spa wing, and panoramic alpine views.",
    gallery: [
      "https://images.pexels.com/photos/7031411/pexels-photo-7031411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/8082233/pexels-photo-8082233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/8134752/pexels-photo-8134752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    id: "p-05",
    title: "Meridian Bay House",
    location: "Amalfi Coast, Italy",
    city: "Amalfi",
    price: 9120000,
    type: "Villa",
    bedrooms: 6,
    bathrooms: 6,
    area: 6800,
    image: "https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    tag: "New",
    description:
      "Carved into the coastal rock face, Meridian Bay House offers layered terraces, a private grotto pool, and sweeping views of the bay.",
    gallery: [
      "https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    featured: true,
  },
  {
    id: "p-06",
    title: "Vantage Twilight Villa",
    location: "Kaş, Turkey",
    city: "Kaş",
    price: 4750000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 4200,
    image: "https://images.pexels.com/photos/19075389/pexels-photo-19075389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "An intimate cliffside villa with a jacuzzi terrace, sculptural stonework, and uninterrupted views of the Mediterranean sunset.",
    gallery: [
      "https://images.pexels.com/photos/19075389/pexels-photo-19075389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7005270/pexels-photo-7005270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    id: "p-07",
    title: "The Marble Residence",
    location: "Antalya, Turkey",
    city: "Antalya",
    price: 3980000,
    type: "Estate",
    bedrooms: 5,
    bathrooms: 5,
    area: 5100,
    image: "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "A dusk-lit estate wrapped in Italian marble and glass, with a resort-style pool deck and manicured private gardens.",
    gallery: [
      "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/8082224/pexels-photo-8082224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/36175674/pexels-photo-36175674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    id: "p-08",
    title: "Highline Sky Suite",
    location: "Manhattan, New York",
    city: "New York",
    price: 15750000,
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: 4600,
    image: "https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    tag: "Exclusive",
    description:
      "A statement penthouse suspended above the skyline, wrapped in floor-to-ceiling glass with a private terrace and skyline views.",
    gallery: [
      "https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/17007767/pexels-photo-17007767.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/35295992/pexels-photo-35295992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
  {
    id: "p-09",
    title: "Grandview Modern Loft",
    location: "Beverly Hills, California",
    city: "Beverly Hills",
    price: 7220000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 4,
    area: 3900,
    image: "https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    description:
      "A refined urban loft featuring museum-grade finishes, a private elevator entry, and an entertaining terrace with city views.",
    gallery: [
      "https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7005270/pexels-photo-7005270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
  },
];

export const stats = [
  { label: "Properties Sold", value: 1280, suffix: "+" },
  { label: "Global Cities", value: 42, suffix: "" },
  { label: "Years of Excellence", value: 18, suffix: "" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
];

export const categories = [
  {
    name: "Villas",
    count: 128,
    image: "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Penthouses",
    count: 64,
    image: "https://images.pexels.com/photos/35295989/pexels-photo-35295989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Estates",
    count: 96,
    image: "https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Chalets",
    count: 37,
    image: "https://images.pexels.com/photos/7031411/pexels-photo-7031411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
];

export const whyChooseUs = [
  {
    title: "Curated Portfolio",
    description:
      "Every residence is personally vetted for architectural merit, location, and enduring value.",
  },
  {
    title: "White-Glove Service",
    description:
      "From first viewing to final signature, a dedicated advisor manages every detail with discretion.",
  },
  {
    title: "Global Network",
    description:
      "Access to off-market listings across 42 cities through our private brokerage network.",
  },
  {
    title: "Investment Intelligence",
    description:
      "Data-driven insight into market trends, valuations, and long-term appreciation potential.",
  },
];

export const timeline = [
  { year: "2007", title: "Founded in New York", description: "Estatia opens its first private brokerage office, focused on architectural residences." },
  { year: "2012", title: "Global Expansion", description: "Offices open in London and Dubai, extending our reach to international buyers." },
  { year: "2017", title: "$1B in Sales", description: "Estatia surpasses one billion dollars in cumulative luxury property transactions." },
  { year: "2021", title: "Digital Concierge Launch", description: "A private client app launches, offering real-time access to off-market listings." },
  { year: "2025", title: "42 Cities Worldwide", description: "Estatia's curated network now spans 42 of the world's most desirable cities." },
];

export const locations = [
  { name: "Malibu", country: "United States", count: 24, image: "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200" },
  { name: "Dubai Marina", country: "United Arab Emirates", count: 41, image: "https://images.pexels.com/photos/35295989/pexels-photo-35295989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200" },
  { name: "Amalfi Coast", country: "Italy", count: 18, image: "https://images.pexels.com/photos/27626185/pexels-photo-27626185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200" },
  { name: "Manhattan", country: "United States", count: 33, image: "https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200" },
];

export const testimonials = [
  {
    name: "Alexandra Whitfield",
    role: "Malibu Homeowner",
    quote:
      "Estatia found us a residence beyond what we imagined possible — the process felt effortless, personal, and remarkably discreet.",
    image: "https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
  },
  {
    name: "James Whitmore",
    role: "Private Investor",
    quote:
      "Their market intelligence and global network gave us access to properties we simply couldn't find anywhere else.",
    image: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
  },
  {
    name: "Sophia Marchetti",
    role: "Amalfi Coast Buyer",
    quote:
      "Every detail was handled with such care. It felt less like a transaction and more like being welcomed into a rare circle.",
    image: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
  },
];

export const awards = [
  { title: "Best Luxury Brokerage", year: "2024", org: "Global Property Awards" },
  { title: "Excellence in Design", year: "2023", org: "Architectural Digest" },
  { title: "Top 100 Agencies", year: "2023", org: "Forbes Real Estate" },
  { title: "Client Choice Award", year: "2022", org: "Luxury Portfolio Intl." },
];

export const team = [
  {
    name: "Marcus Bellamy",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/757316/pexels-photo-757316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=600",
    bio: "With over 20 years in luxury real estate, Marcus founded Estatia to redefine how the world's finest properties are found and sold.",
  },
  {
    name: "Elena Kovač",
    role: "Head of Global Sales",
    image: "https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=600",
    bio: "Elena leads our international brokerage network, connecting discerning clients with rare architectural residences.",
  },
  {
    name: "Daniel Osei",
    role: "Director of Design",
    image: "https://images.pexels.com/photos/8495301/pexels-photo-8495301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=600",
    bio: "Daniel curates the aesthetic standard of every listing, ensuring each property meets Estatia's design pedigree.",
  },
  {
    name: "Isabelle Laurent",
    role: "Client Relations Lead",
    image: "https://images.pexels.com/photos/590479/pexels-photo-590479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=600",
    bio: "Isabelle ensures every client journey — from inquiry to closing — feels seamless, personal, and quietly extraordinary.",
  },
];

export const officeGallery = [
  "https://images.pexels.com/photos/8082233/pexels-photo-8082233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  "https://images.pexels.com/photos/8082224/pexels-photo-8082224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  "https://images.pexels.com/photos/36175674/pexels-photo-36175674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
];

export const values = [
  { title: "Integrity", description: "Transparent guidance, always aligned with the client's best interest." },
  { title: "Craft", description: "An obsessive attention to architectural and material detail." },
  { title: "Discretion", description: "Privacy and trust form the foundation of every relationship." },
  { title: "Vision", description: "We see the enduring value in a property long before the market does." },
];

export const faqs = [
  {
    question: "How does Estatia source off-market properties?",
    answer:
      "Through our private global network of developers, architects, and estate owners, we gain early access to residences before they reach the open market.",
  },
  {
    question: "Do you assist international buyers?",
    answer:
      "Yes. Our advisors coordinate legal, financial, and relocation logistics for clients purchasing across borders.",
  },
  {
    question: "Can I schedule a private viewing?",
    answer:
      "Absolutely — every listing can be arranged for a private, in-person or virtual walkthrough at your convenience.",
  },
  {
    question: "What is your commission structure?",
    answer:
      "Our fees are tailored per engagement and discussed transparently during your complimentary consultation.",
  },
];

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
