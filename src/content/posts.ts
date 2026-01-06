export interface Post {
  title: string;
  slug: string;
  pubDate: string;
  excerpt: string;
  category: string;
  coverImage: string;
  content: string;
}
export const posts: Post[] = [
  {
    title: "The Silent Peaks of Patagonia",
    slug: "silent-peaks-patagonia",
    pubDate: "2024-03-15",
    category: "Hiking",
    coverImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop",
    excerpt: "Searching for solitude in the granite heart of the Torres del Paine massif during the shoulder season.",
    content: `
# The Granite Cathedral
There is a specific kind of silence that only exists above 2,000 meters. It's not the absence of sound, but rather the presence of a vast, breathing stillness. In the heart of Patagonia, this silence is heavy with the scent of Antarctic beech and the distant roar of calving glaciers.
### The Ascent
We began our trek at 4:00 AM, the cold air biting at our lungs. The goal was the base of the Torres—three vertical granite pillars that pierce the sky like the fingers of a buried giant.
> "To walk in nature is to witness a thousand miracles." — Mary Davis
The trail was steep, winding through ancient lenga forests where the trees bend away from the prevailing winds. By 9:00 AM, the sun broke over the horizon, painting the granite in hues of burning orange and deep amber.
### Gear Check
For this expedition, we relied on lightweight technical layers:
*   High-altitude merino base layers
*   Gore-Tex Pro shells for the unpredictable wind
*   Ultralight carbon trekking poles
The descent was a test of knees and willpower, but the memory of that orange glow remains etched in our minds.
    `
  },
  {
    title: "Essential Gear for Alpine Bivouacking",
    slug: "alpine-bivouac-gear",
    pubDate: "2024-03-10",
    category: "Gear",
    coverImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Lightweight, durable, and life-saving. A curated list of what actually matters when sleeping on a ledge.",
    content: `
# Sleeping Under the Stars
When you're carrying your house on your back, every gram feels like a kilogram by the tenth mile. Bivouacking requires a brutal assessment of needs versus wants.
### 1. The Sleep System
Your bag should be rated at least 10 degrees colder than the expected low. We recommend:
- **Quilts over bags:** For side sleepers and weight savings.
- **R-Value matters:** Don't skimp on the pad; the ground sucks heat faster than the air.
### 2. The Kitchen
A simple canister stove and a titanium pot are all you need. Forget the four-course meal; high-calorie dehydrated stews are your best friend at 3,000 meters.
### 3. Safety First
Always carry a satellite communicator. In the alpine zones, weather changes in minutes, not hours.
    `
  },
  {
    title: "Into the Red: Moab's Secret Canyons",
    slug: "moab-secret-canyons",
    pubDate: "2024-02-28",
    category: "Camping",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    excerpt: "Escaping the crowds of Arches to find the sandstone cathedrals that the maps forgot to name.",
    content: `
# Sandstone and Sagebrush
Moab is a victim of its own beauty. The iconic arches are now surrounded by shuttle buses and selfie sticks. To find the true spirit of the desert, you have to go further.
### The Hidden Wash
Six miles south of the main road lies a wash that leads into a labyrinth of slot canyons. The walls here are coated in desert varnish—a dark, manganese-rich patina that indigenous people used for petroglyphs centuries ago.
We camped in a natural alcove, the sandstone warm from the day's sun. As the temperature dropped, the desert came alive. Owls hooted from the canyon rim, and the stars were so bright they cast shadows.
### Leave No Trace
In the desert, footprints on biological soil crust can take decades to heal. 
**Stay on the rocks. Stay in the wash. Leave only footprints.**
    `
  }
];