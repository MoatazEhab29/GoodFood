export type Badge = "Bestseller" | "Spicy" | "New" | "Chef's Pick";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badges: Badge[];
  calories: number;
}

export type CategoryId = 'burgers' | 'chicken' | 'sides';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
  items: MenuItem[];
}

export const categories: Category[] = [
  {
    id: 'burgers',
    label: 'Smash Burgers',
    icon: 'burger',
    items: [
      {
        id: 'b1',
        name: 'Double Cheese Smash',
        description: 'Two thin-seared beef patties, American cheese, house pickles, caramelized onions, signature smash sauce.',
        price: 11.5,
        image: 'https://images.pexels.com/photos/12325274/pexels-photo-12325274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['Bestseller'],
        calories: 720,
      },
      {
        id: 'b2',
        name: 'BBQ Bacon Burger',
        description: 'Double beef patty, hickory bacon, smoky BBQ glaze, cheddar, crispy onion strings, lettuce.',
        price: 13.0,
        image: 'https://images.pexels.com/photos/34407509/pexels-photo-34407509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ["Chef's Pick"],
        calories: 850,
      },
      {
        id: 'b3',
        name: 'Spicy Jalapeño Smash',
        description: 'Seared beef patty, pepper jack, pickled jalapeños, chipotle mayo, fire-roasted peppers.',
        price: 12.0,
        image: 'https://images.pexels.com/photos/20722029/pexels-photo-20722029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['Spicy', 'New'],
        calories: 680,
      },
      {
        id: 'b4',
        name: 'Classic Single Smash',
        description: 'One perfectly seared beef patty, American cheese, pickles, onions, smash sauce on a brioche bun.',
        price: 8.5,
        image: 'https://images.pexels.com/photos/6896381/pexels-photo-6896381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: [],
        calories: 520,
      },
    ],
  },
  {
    id: 'chicken',
    label: 'Crispy Chicken',
    icon: 'chicken',
    items: [
      {
        id: 'c1',
        name: 'Spicy Tendy Box',
        description: 'Four hand-breaded spicy tenders, cooling ranch dip, pickles, and a side of your choice.',
        price: 12.5,
        image: 'https://images.pexels.com/photos/27352273/pexels-photo-27352273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['Bestseller', 'Spicy'],
        calories: 780,
      },
      {
        id: 'c2',
        name: 'Signature Chicken Sandwich',
        description: 'Buttermilk-brined chicken breast, brioche bun, slaw, bread-and-butter pickles, comeback sauce.',
        price: 10.5,
        image: 'https://images.pexels.com/photos/27758748/pexels-photo-27758748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ["Chef's Pick"],
        calories: 640,
      },
      {
        id: 'c3',
        name: 'Crispy Chicken & Fries Plate',
        description: 'Three golden tenders, loaded fries with cheese sauce, coleslaw, and dinner rolls.',
        price: 14.0,
        image: 'https://images.pexels.com/photos/14686443/pexels-photo-14686443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['New'],
        calories: 920,
      },
      {
        id: 'c4',
        name: 'Nashville Hot Slider',
        description: 'Crispy mini fillet drenched in Nashville hot oil, slaw, pickles on a soft potato bun.',
        price: 7.5,
        image: 'https://images.pexels.com/photos/20003226/pexels-photo-20003226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['Spicy'],
        calories: 480,
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides & Drinks',
    icon: 'fries',
    items: [
      {
        id: 's1',
        name: 'Loaded Fries',
        description: 'Golden fries piled with melted cheddar, bacon bits, scallions, and house ranch drizzle.',
        price: 7.0,
        image: 'https://images.pexels.com/photos/27758758/pexels-photo-27758758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['Bestseller'],
        calories: 560,
      },
      {
        id: 's2',
        name: 'Cheese Sauce Fries',
        description: 'Crispy fries topped with rich melted cheese and vibrant house seasoning.',
        price: 5.5,
        image: 'https://images.pexels.com/photos/29285461/pexels-photo-29285461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: [],
        calories: 450,
      },
      {
        id: 's3',
        name: 'Cookies & Cream Shake',
        description: 'Thick hand-spun milkshake with crushed cookies, whipped cream, and a chocolate wafer.',
        price: 6.5,
        image: 'https://images.pexels.com/photos/30660270/pexels-photo-30660270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ["Chef's Pick"],
        calories: 540,
      },
      {
        id: 's4',
        name: 'Caramel Iced Coffee',
        description: 'Cold-brewed coffee with caramel, whipped cream, and a dusting of cocoa.',
        price: 5.0,
        image: 'https://images.pexels.com/photos/17558645/pexels-photo-17558645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badges: ['New'],
        calories: 320,
      },
    ],
  },
];

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marcus T.',
    avatar: 'MT',
    rating: 5,
    date: '2 weeks ago',
    text: 'The Double Cheese Smash is unreal — perfectly crispy edges and that smash sauce is addictive. Got it delivered in 22 minutes. This is my new go-to spot.',
  },
  {
    id: 'r2',
    name: 'Layla K.',
    avatar: 'LK',
    rating: 5,
    date: '1 month ago',
    text: 'Spicy Tendy Box is the best fried chicken in the city, hands down. Crunchy, juicy, and the ranch is house-made. Loaded fries are a must-order.',
  },
  {
    id: 'r3',
    name: 'Diego R.',
    avatar: 'DR',
    rating: 5,
    date: '3 weeks ago',
    text: 'Came for the Family Feast and left stuffed. Four people, tons of food, and it didn\'t break the bank. The shakes are legitimately the best I\'ve had.',
  },
];
