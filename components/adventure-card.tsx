import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Activity } from 'lucide-react'
import { Adventure } from '@/types/adventure'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface AdventureCardProps {
  adventure: Adventure
}

export function AdventureCard({ adventure }: AdventureCardProps) {
  return (
    <Card className="group overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors border border-green-500/20 hover:border-green-500/50 rounded-none">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={adventure.image}
          alt={adventure.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-green-500 mb-2 uppercase">{adventure.title}</h2>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="h-4 w-4 mr-1 text-green-500" />
            {adventure.location}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-green-500" />
            {adventure.duration}
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Activity className="h-4 w-4 mr-2 text-green-500" />
            {adventure.difficulty}
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-6 line-clamp-3">{adventure.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-white">
            <span className="text-2xl font-bold text-green-500">${adventure.price}</span>
            <span className="text-sm text-gray-400 ml-1">per person</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-none" asChild>
            <Link href={`/expeditions/${adventure.slug}`}>View Trek</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

