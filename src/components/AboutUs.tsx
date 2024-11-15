    import Image from 'next/image'
    import { MapPinIcon, ClockIcon, PhoneIcon } from 'lucide-react'

    export const AboutUs = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-red-500">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
                Desde nuestros inicios, en FastBite nos propusimos reinventar la comida rápida. Nuestra misión es servir comida rápida con calidad superior, combinando sabores irresistibles con un servicio excepcional.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
                Nuestros valores son la calidad, la rapidez y la pasión por lo que hacemos. Nos esforzamos por ofrecer una experiencia culinaria única a cada cliente.
            </p>
            <div className="flex flex-col space-y-4 bg-yellow-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center text-gray-800">
                <MapPinIcon className="mr-3 h-6 w-6 text-red-500" />
                <span>Servimos en toda el área metropolitana</span>
                </div>
                <div className="flex items-center text-gray-800">
                <ClockIcon className="mr-3 h-6 w-6 text-red-500" />
                <span>Abierto de 11:00 AM a 10:00 PM</span>
                </div>
                <div className="flex items-center text-gray-800">
                <PhoneIcon className="mr-3 h-6 w-6 text-red-500" />
                <span>Llámanos al: 123-456-7890</span>
                </div>
            </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image src="/placeholder.svg?height=400&width=600" alt="Equipo FastBite" layout="fill" objectFit="cover" />
            </div>
        </div>
        </div>
    </section>
    )