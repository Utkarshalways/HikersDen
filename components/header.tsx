import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-3xl font-bold text-green-500 tracking-wider uppercase">
            Hiker's Den
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
              EXPEDITIONS
            </Link>
            <Link href="/gear" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
              GEAR
            </Link>
            <Link href="/training" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
              TRAINING
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
              BLOG
            </Link>
            <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-black rounded-none">
              JOIN US
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-orange-500 rounded-none">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

