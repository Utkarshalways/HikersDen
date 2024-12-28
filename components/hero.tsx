import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://video.wixstatic.com/video/84770f_21b31c337bc843acb3e9316d56fa7d07/720p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 uppercase">
            Hiker's Den
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Embark on heart-pounding adventures, conquer towering peaks, and push your limits with our extreme expeditions.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-none" asChild>
              <Link href="/explore">
                Explore Treks
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-green-500 border-green-500 hover:bg-green-500/10 rounded-none" asChild>
              <Link href="/about">
                Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

