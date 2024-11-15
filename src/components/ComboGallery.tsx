    'use client'

    import { useState } from 'react'
    import Image from 'next/image'
    import { Button } from "@/components/ui/button"
    import { Card, CardContent } from "@/components/ui/card"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

    export const ComboGallery = () => {
    const [activeTab, setActiveTab] = useState('todos')

    const combos = [
        { id: 1, name: 'Combo Individual', category: 'uno', price: 9.99, image: '/placeholder.svg?height=300&width=300', description: 'Hamburguesa, papas y refresco', promo: true },
        { id: 2, name: 'Combo Pareja', category: 'dos', price: 18.99, image: '/placeholder.svg?height=300&width=300', description: '2 hamburguesas, 2 papas y 2 refrescos', promo: false },
        { id: 3, name: 'Combo Familiar', category: 'familiar', price: 29.99, image: '/placeholder.svg?height=300&width=300', description: '4 hamburguesas, 2 papas grandes y 4 refrescos', promo: true },
        { id: 4, name: 'Mega Combo', category: 'familiar', price: 39.99, image: '/placeholder.svg?height=300&width=300', description: '6 hamburguesas, 3 papas grandes y 6 refrescos', promo: false },
        { id: 5, name: 'Combo Vegetariano', category: 'uno', price: 11.99, image: '/placeholder.svg?height=300&width=300', description: 'Hamburguesa vegana, ensalada y jugo natural', promo: true },
        { id: 6, name: 'Combo Desayuno', category: 'uno', price: 8.99, image: '/placeholder.svg?height=300&width=300', description: 'Sándwich de huevo, café y frutas', promo: false },
    ]

    const filteredCombos = activeTab === 'todos' ? combos : combos.filter(combo => combo.category === activeTab)

    return (
        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-red-500">Nuestros Combos</h2>
            <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white rounded-full p-2 shadow-md">
                <TabsTrigger value="todos" onClick={() => setActiveTab('todos')} className="rounded-full">Todos</TabsTrigger>
                <TabsTrigger value="uno" onClick={() => setActiveTab('uno')} className="rounded-full">Para Uno</TabsTrigger>
                <TabsTrigger value="dos" onClick={() => setActiveTab('dos')} className="rounded-full">Para Dos</TabsTrigger>
                <TabsTrigger value="familiar" onClick={() => setActiveTab('familiar')} className="rounded-full">Familiar</TabsTrigger>
            </TabsList>
            <TabsContent value="todos" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredCombos.map((combo) => (
                <Card key={combo.id} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-48">
                    <Image src={combo.image} alt={combo.name} layout="fill" objectFit="cover" />
                    {combo.promo && (
                        <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-lg font-semibold">
                        Promoción
                        </div>
                    )}
                    </div>
                    <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{combo.name}</h3>
                    <p className="text-gray-600 mb-4">{combo.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-red-500">${combo.price.toFixed(2)}</span>
                        <Button variant="outline" className="hover:bg-red-500 hover:text-white transition-colors duration-300">
                        Ordenar
                        </Button>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </TabsContent>
            </Tabs>
        </div>
        </section>
    )
    }