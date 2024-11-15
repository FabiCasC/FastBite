    import { Button } from "@/components/ui/button"
    import { ChevronRightIcon } from 'lucide-react'

    export const Banner = () => (
    <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=700&width=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 to-red-500/70 flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up">
            Rápido, sabroso y pensado para ti
            </h1>
            <Button size="lg" className="bg-white text-red-500 hover:bg-yellow-100 transition-all duration-300 animate-bounce">
            Ordena ahora <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
        </div>
        </div>
    </div>
    )