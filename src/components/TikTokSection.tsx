    'use client'

    import { useState, useEffect } from 'react'
    import Image from 'next/image'

    export const TikTokSection = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // Aquí normalmente harías una llamada a la API de TikTok
        // Por ahora, usaremos datos de ejemplo
        setVideos([
        { id: 1, thumbnail: '/placeholder.svg?height=400&width=225', url: '#' },
        { id: 2, thumbnail: '/placeholder.svg?height=400&width=225', url: '#' },
        { id: 3, thumbnail: '/placeholder.svg?height=400&width=225', url: '#' },
        { id: 4, thumbnail: '/placeholder.svg?height=400&width=225', url: '#' },
        ])
    }, [])

    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-red-500">Síguenos en TikTok</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videos.map((video) => (
                <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" 
                className="block aspect-[9/16] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="relative w-full h-full">
                    <Image src={video.thumbnail} alt="TikTok video thumbnail" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">Ver en TikTok</span>
                    </div>
                </div>
                </a>
            ))}
            </div>
        </div>
        </section>
    )
    }