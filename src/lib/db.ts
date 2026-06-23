// Client-safe Types and Static Data

export type Trek = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  difficulty: "Easy" | "Easy to Moderate" | "Moderate" | "Difficult";
  altitude?: string;
  location: string;
  rating: number;
  reviewsCount: number;
  image: string;
  highlights: string[];
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
};

export type Booking = {
  id: string;
  trekId: string;
  trekTitle: string;
  pricePerPerson: number;
  trekDate: string;
  fullname: string;
  email: string;
  phone: string;
  guestsCount: number;
  aadhaarFileName?: string;
  healthFileName?: string;
  status: "Pending" | "Confirmed" | "Cancelled";
  bookingDate: string;
  totalPrice: number;
};

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
};

// Static Data
export const TREKS: Trek[] = [
  {
    id: "ratangad-fort",
    slug: "ratangad-fort-trek",
    title: "Ratangad Fort Trek",
    subtitle: "The Jewel of Sahyadris & Amruteshwar Exploration",
    description: "Ratangad is a 400-year-old fort perched above Bhandardara lake. Captured by Chhatrapati Shivaji Maharaj, this fort boasts the iconic 'Nedhe' or 'Eye of the Needle'—a natural rock cavity offering mesmerizing views of the deep Sahyadri gorges. Our trek covers the historical steps, ancient water tanks, and a visit to the 1200-year-old Amruteshwar temple at Ratanwadi.",
    price: 2199,
    originalPrice: 2499,
    duration: "1 Day / 1 Night",
    difficulty: "Moderate",
    altitude: "4,250 ft",
    location: "Bhandardara, Maharashtra",
    rating: 4.8,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1626761191028-7f4ad1cc41f2?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Climb and explore the iconic 'Nedhe' (Eye of the Needle) rock formation",
      "Indulge in breathtaking panoramas of Bhandardara Dam and Kalsubai Peak",
      "Explore historical battlements, ancient caves, and rock-cut water cisterns",
      "Visit the architectural wonder - Amruteshwar Temple (1,200 years old)",
      "Feast on home-cooked, authentic local Maharashtrian meals in Ratanwadi base village"
    ],
    itinerary: [
      "10:00 PM (Trek Eve): Meet the team at Dadar/Pune and start the journey in our private luxury travel coach.",
      "04:30 AM: Arrive at the scenic base village of Ratanwadi. Rest in local home-stays.",
      "06:30 AM: Wake up to crisp mountain air, freshen up, and enjoy a warm breakfast with hot tea.",
      "07:30 AM: Mandatory briefing and safety session by our certified guides. Begin the ascend through the forest trail.",
      "11:00 AM: Reach the summit! Rest, capture stunning photos at the Nedhe, and explore the ancient fort gates.",
      "12:30 PM: Start descending back along the waterfall routes (active during monsoons).",
      "03:30 PM: Reach the base. Relish a heavy local lunch (Veg/Non-Veg options).",
      "05:00 PM: Start the return journey. Evening tea halt on the highway.",
      "09:30 PM: Arrive back in Mumbai/Pune with lifetime memories."
    ],
    inclusions: [
      "To & Fro travel in private AC push-back vehicle",
      "Authentic local breakfast and unlimited Maharashtrian lunch",
      "Forest entry and trekking permits",
      "Certified local guides, trek leaders, and safety equipment",
      "Basic first-aid support"
    ],
    exclusions: [
      "Personal expenses (bottled water, soft drinks, etc.)",
      "Additional snacks bought along the route",
      "Anything not specifically mentioned in inclusions"
    ],
    faqs: [
      {
        question: "Is this trek suitable for beginners?",
        answer: "Yes, it is suitable for beginners with average physical fitness. There are steel ladders installed on the steeper rock faces to ensure safety."
      },
      {
        question: "What is the age limit for the trek?",
        answer: "Participants between 10 and 55 years old are welcome. Kids below 15 must be accompanied by a guardian."
      },
      {
        question: "What should I pack?",
        answer: "Pack trekking shoes with good grip, a rain jacket, 2-3 liters of water, extra set of dry clothes, and personal medication."
      }
    ]
  },
  {
    id: "raigad-fort",
    slug: "raigad-fort-trek",
    title: "Raigad Fort Trek & Historical Trail",
    subtitle: "Walk Through the Capital of the Maratha Empire",
    description: "Raigad is a hill fortress situated in Mahad, Maharashtra. It was chosen as the capital of the Maratha Kingdom by Chhatrapati Shivaji Maharaj in 1674. Steeped in history and valiance, this trek offers a journey through the massive Mahadarwaja, the stunning Jagadishwar Temple, and the sheer cliffs of Takmak Tok.",
    price: 1499,
    originalPrice: 1799,
    duration: "1 Day",
    difficulty: "Easy to Moderate",
    altitude: "2,700 ft",
    location: "Mahad, Maharashtra",
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Pay respects at the Samadhi of Chhatrapati Shivaji Maharaj",
      "Walk the path of royals through Raj Sabha (King's Court) and the Queens' palace ruins",
      "Peer into the abyss from the historical Takmak Tok (punishment cliff)",
      "Optional scenic ropeway ride ascending 2,700 ft in just 4 minutes",
      "Authentic Konkani-style lunch at the foothills"
    ],
    itinerary: [
      "11:00 PM (Trek Eve): Pick-ups from Pune/Mumbai in private transport.",
      "05:00 AM: Arrive at Raigad base. Rest and freshen up.",
      "06:30 AM: Enjoy hot breakfast (Poha/Misal Pav) and tea.",
      "07:30 AM: Start the ascend via 1,400 steps (or register for the ropeway queue).",
      "10:00 AM: Step onto the fort's royal plateau. Visit the Jagadishwar Temple, Shivaji Maharaj's Samadhi, and the Raj Sadar.",
      "01:00 PM: Start descending back to the base village.",
      "03:00 PM: Relish konkan-style lunch at the foothills village.",
      "04:30 PM: Depart for the return journey, enjoying sunset views over the Western Ghats.",
      "09:00 PM: Reach Mumbai/Pune."
    ],
    inclusions: [
      "Transport from Mumbai/Pune to base and back",
      "Breakfast, Konkani Buffet Lunch, and evening tea",
      "Fort Entry Fees and local guide charges",
      "Trek coordinator services",
      "First aid support"
    ],
    exclusions: [
      "Ropeway tickets (approx. ₹350 to & fro)",
      "Personal mineral water and expenses",
      "Anything not mentioned in Inclusions"
    ],
    faqs: [
      {
        question: "Is there a ropeway option?",
        answer: "Yes, there is an operating ropeway system. If you do not wish to climb the 1400 steps, you can buy a ropeway ticket at the base and reach the top in 4 minutes."
      },
      {
        question: "How difficult are the steps?",
        answer: "The steps are well-laid and wide, but require climbing. There are railings for support, making it an easy-moderate climb."
      }
    ]
  },
  {
    id: "nanemachi-waterfall",
    slug: "nanemachi-waterfall-trek",
    title: "Nanemachi Waterfall Trek",
    subtitle: "A Turquoise Canyon Paradise Hidden in Forests",
    description: "Nanemachi is one of Maharashtra's most stunning hidden waterfalls. Carved deep into a vertical stone canyon in the dense jungles of Mahad, this 400ft high waterfall crashes down into a crystal-clear, deep turquoise blue lagoon pool. It offers a dreamlike jungle trail for hikers seeking pristine monsoon wilderness.",
    price: 1499,
    originalPrice: 1999,
    duration: "1 Day",
    difficulty: "Easy",
    altitude: "1,200 ft",
    location: "Mahad, Maharashtra",
    rating: 4.7,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Hike through a dense canopy of tropical rainforests and small streams",
      "Witness the jaw-dropping 400ft vertical Nanemachi waterfall canyon",
      "Enjoy a refreshing swim in the turquoise pool with provided safety gear",
      "Capture incredible tropical landscape photography",
      "Authentic farm-style organic lunch cooked by local forest dwellers"
    ],
    itinerary: [
      "05:00 AM: Early morning departures from Mumbai & Pune in private AC coaches.",
      "08:30 AM: Arrive at the village. Freshen up and eat a hearty village breakfast.",
      "09:30 AM: Start the jungle trail trek. Traverse mud tracks, streams, and giant roots.",
      "11:00 AM: Arrive at the magical Nanemachi Waterfall. Swim, click photos, and relax by the streams under guided safety.",
      "01:30 PM: Head back along the green jungle path.",
      "03:00 PM: Reach the base village. Treat yourself to a hot traditional Maharashtrian lunch.",
      "04:30 PM: Board the bus. Evening tea and snacks on the expressway.",
      "08:30 PM: Reach Mumbai/Pune."
    ],
    inclusions: [
      "Private bus transport (AC/Non-AC pushback)",
      "Standard breakfast, local village lunch, and evening tea",
      "Safety gear, life jackets, and guide fees",
      "Forest entry permissions",
      "Trek leadership and medical kit"
    ],
    exclusions: [
      "Aadhaar printing/copies, medical tests",
      "Personal shopping and water bottles",
      "Any extra food item orders"
    ],
    faqs: [
      {
        question: "Is swimming mandatory or safe?",
        answer: "Quiet optional. We provide safety life jackets to everyone entering the pool, and certified guides stand on watch. It is highly safe with our guidance."
      },
      {
        question: "Does the trek get cancelled in heavy rain?",
        answer: "We monitor weather forecasts carefully. Moderate to heavy rains enhance the waterfall's beauty. However, in case of red alerts or flash flood warnings, we reschedule or offer alternative safe treks."
      }
    ]
  }
];

export const BLOGS: Blog[] = [
  {
    id: "maharashtra-forts-history",
    slug: "maharashtra-forts-history",
    title: "The Hidden Stories Behind Maharashtra's Forts",
    excerpt: "Behind the rugged stone battlements of the Sahyadri mountains lie centuries of strategy, sacrifice, and the revolutionary vision of Chhatrapati Shivaji Maharaj.",
    content: `Maharashtra's landscape is dotted with over 350 forts, each guarding a pass, a river, or a coastline. These stone giants are not merely monuments of history—they are engineering marvels designed to withstand fierce weather and relentless sieges.

### The Strategic Brilliance of Sahyadri Forts
Unlike the grand desert palaces of Rajasthan, the forts of Maharashtra were built as military outposts. They blend seamlessly into the volcanic basalt cliffs. Shivaji Maharaj pioneered the concept of "Ganimi Kava" (guerrilla warfare), where mountain topography served as the primary weapon.

1. **Ratangad**: Perched high above the Bhandardara valley, its natural hole 'Nedhe' acted as a watchtower monitoring the ancient trade paths.
2. **Raigad**: Known as the Gibraltar of the East, its sheer cliff drops of over 1000 feet made it virtually impregnable from all sides.
3. **Nanemachi**: A pass connecting the coastal Konkan to the high Deccan plateau, where waterfall valleys and dense forests provided cover to cavalry divisions.

### Empowering the Local Communities
An overlooked pillar of Maratha fortress management was the involvement of local tribes—the Kolis, Bhils, and Ramoshis. They knew every secret creek, forest trail, and cave. Our treks at Chalte Firte actively support descendants of these communities by sourcing food, homestays, and guiding services directly from them, preserving local folklore and keeping the heritage alive.

### Trekking as a Way of Life
When you hike up these forts today, you aren't just engaging in a physical sport; you are stepping back in time. Feeling the cool wind at Takmak Tok or drinking sweet well water at Ratangad makes you appreciate the resilience of the humans who built them.

*Next time you tie your laces, remember: you are walking on paths forged by warriors, kings, and legends.*`,
    coverImage: "https://images.unsplash.com/photo-1626761191028-7f4ad1cc41f2?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    date: "June 20, 2026",
    author: "Swaraj Deshmukh",
    tags: ["History", "Maharashtra", "Forts", "Trekking Guide"]
  },
  {
    id: "monsoon-trek-safety-guide",
    slug: "monsoon-trek-safety-guide",
    title: "Monsoon Trekking in Sahyadris: 5 Essential Safety Rules",
    excerpt: "The rainy season turns the Western Ghats into a green paradise, but slippery rocks and sudden downpours require preparation. Here is how to trek safely.",
    content: `Monsoon season (June to September) is when the Sahyadris come alive. Cascading waterfalls, fog-laden trails, and verdant valleys invite thousands of adventure lovers. However, the monsoons also bring high risks: flash floods, landslide zones, and slippery basalt trails.

To help you enjoy the rain responsibly, here are the 5 safety principles followed by our professional guides at Chalte Firte.

### 1. Invest in Proper Footwear
A normal running shoe will fail you on wet basalt rock. Invest in trekking shoes that offer:
* Deep lug rubber outsoles for mud grip.
* Ankle support to prevent sprains on rocky inclines.
* Water-draining mesh materials.

### 2. Understand the Watershed & Flash Floods
Monsoon streams can go from knee-deep crossings to raging torrents within 15 minutes of heavy rain upstream. 
* *Rule*: Never cross a stream if the water rises above your knees.
* *Rule*: Do not pitch tents near riverbeds or immediately beneath steep slopes.

### 3. Pack Waterproof Gear
Always wrap your dry clothes, Aadhaar cards, mobile devices, and medical kits inside thick plastic bags *before* putting them into your backpack. A backpack rain cover is only for drizzle; it will not protect your gear during a Sahyadri cloudburst.

### 4. Have a Backup Plan and Certified Guide
Dense monsoonal fog can reduce visibility to less than 5 meters on summits like Ratangad or Harishchandragad. Losing the trail in fog is extremely easy. Always trek with local guides who know the terrain by memory.

### 5. Hydrate and Replenish Salts
People think they don't sweat in the rain. This is a dangerous misconception. Trekking in high humidity drains body salts quickly, causing muscle cramps. Keep carrying water mixed with ORS or glucose.

*Tread lightly, respect nature, and let the rain wash away the stress of city life!*`,
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    date: "June 15, 2026",
    author: "Pragati Shinde",
    tags: ["Safety", "Monsoon", "Sahyadri", "Trekking Guide"]
  }
];
