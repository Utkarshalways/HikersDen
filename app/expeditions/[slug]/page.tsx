import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// This would typically come from a database or API
const expeditionData = {
  title: "EVEREST BASE CAMP TREK",
  location: "NEPAL",
  duration: "14 DAYS",
  difficulty: "CHALLENGING",
  price: 2999,
  description: "Embark on the ultimate trekking adventure to the base of the world's highest peak. Experience breathtaking Himalayan vistas and rich Sherpa culture.",
  longDescription: "The Everest Base Camp Trek is a once-in-a-lifetime journey that takes you through the heart of the Nepalese Himalayas. You'll trek through stunning landscapes, visit traditional Sherpa villages, and stand in the shadow of Mount Everest, the world's highest peak. This challenging trek rewards you with unparalleled views, rich cultural experiences, and the pride of reaching the base of Everest.",
  videoUrl: "https://player.vimeo.com/video/367512707",
  highlights: [
    "Stand at the base of Mount Everest, the world's highest peak",
    "Experience the rich Sherpa culture and visit ancient monasteries",
    "Trek through diverse landscapes, from lush forests to glacial moraines",
    "Witness breathtaking panoramas of the Himalayan range",
    "Challenge yourself with high-altitude trekking",
  ],
  tips: [
    "Acclimatize properly to avoid altitude sickness",
    "Pack layers for varying temperatures",
    "Train for several months before the trek",
    "Bring a good quality camera to capture the stunning views",
    "Respect local customs and traditions",
  ]
}

export default function ExpeditionDetail({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the expedition data based on the slug
  const expedition = expeditionData;

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <iframe 
            src={expedition.videoUrl} 
            allow="autoplay; fullscreen; picture-in-picture" 
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">{expedition.title}</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">{expedition.location}</span>
            <span className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">{expedition.duration}</span>
            <span className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">{expedition.difficulty}</span>
            <span className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">${expedition.price} per person</span>
          </div>
          <p className="text-lg mb-8">{expedition.longDescription}</p>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-4">Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                {expedition.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-500 mb-4">Tips for the Trek</h2>
              <ul className="list-disc list-inside space-y-2">
                {expedition.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-none" asChild>
              <Link href="/book">Book This Trek</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

