export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    isNew?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Cyber Jacket V2',
        price: 450,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1551488852-d8042592b512?q=80&w=2070&auto=format&fit=crop',
        rating: 4.8,
        isNew: true,
    },
    {
        id: '2',
        name: 'Neural Interface Hood',
        price: 120,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1935&auto=format&fit=crop',
        rating: 4.5,
    },
    {
        id: '3',
        name: 'Zero-G Treads',
        price: 320,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2015&auto=format&fit=crop',
        rating: 4.9,
        isNew: true,
    },
    {
        id: '4',
        name: 'Flux Capacitor Tee',
        price: 85,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
        rating: 4.2,
    },
    {
        id: '5',
        name: 'Obsidian Cargo Pants',
        price: 240,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1552160753-117159d28e72?q=80&w=1964&auto=format&fit=crop',
        rating: 4.7,
    },
    {
        id: '6',
        name: 'Holo-Visor',
        price: 180,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1589363460779-cd71c5aed002?q=80&w=2070&auto=format&fit=crop',
        rating: 4.6,
    },
    {
        id: '7',
        name: 'Rebel Bomber',
        price: 380,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
        rating: 4.8,
    },
    {
        id: '8',
        name: 'Tech-Knit Sweater',
        price: 150,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2072&auto=format&fit=crop',
        rating: 4.4,
    },
];
