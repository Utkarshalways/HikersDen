import { Adventure } from "@/types/adventure";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AdventureCard } from "@/components/adventure-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SAMPLE_ADVENTURES: Adventure[] = [
  {
    title: "EVEREST BASE CAMP TREK",
    location: "NEPAL",
    duration: "14 DAYS",
    difficulty: "CHALLENGING",
    price: 2999,
    description:
      "Embark on the ultimate trekking adventure to the base of the world's highest peak. Experience breathtaking Himalayan vistas and rich Sherpa culture.",
    image:
      "/lauraonboat.avif",
    slug: "everest-base-camp-trek",
  },
  {
    title: "INCA TRAIL TO MACHU PICCHU",
    location: "PERU",
    duration: "4 DAYS",
    difficulty: "MODERATE",
    price: 1599,
    description:
      "Follow in the footsteps of the ancient Incas on this classic trek to the lost city of Machu Picchu. Discover stunning mountain scenery and fascinating ruins.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "inca-trail-machu-picchu",
  },
  {
    title: "MONT BLANC CIRCUIT",
    location: "FRANCE / ITALY / SWITZERLAND",
    duration: "11 DAYS",
    difficulty: "CHALLENGING",
    price: 2499,
    description:
      "Circle the highest peak in Western Europe on this epic trek through three countries. Enjoy alpine meadows, glaciers, and charming mountain villages.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "mont-blanc-circuit",
  },
];

const ADVENTURE_CATEGORIES = [
  { name: "Mountain Climbing", icon: "🏔️" },
  { name: "Trekking", icon: "🥾" },
  { name: "White Water Rafting", icon: "🚣" },
  { name: "Rock Climbing", icon: "🧗" },
  { name: "Skydiving", icon: "🪂" },
  { name: "Paragliding", icon: "🪂" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <Hero />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-500 mb-4 uppercase">
              Adventure Categories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover a world of thrilling experiences across various adventure
              disciplines.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {ADVENTURE_CATEGORIES.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto py-4 px-6 text-green-500 border-green-500 hover:bg-green-500 hover:text-black rounded-none"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-semibold">{category.name}</div>
                </div>
              </Button>
            ))}
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-500 mb-4 uppercase">
              Featured Treks
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Embark on life-changing adventures with our carefully curated
              selection of extreme expeditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_ADVENTURES.map((adventure) => (
              <AdventureCard key={adventure.slug} adventure={adventure} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-none"
              asChild
            >
              <Link href="/expeditions">View All Treks</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
