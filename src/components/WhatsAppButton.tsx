    import { PhoneIcon as WhatsappIcon } from 'lucide-react'

    export const WhatsAppButton = () => (
    <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center group"
    >
        <WhatsappIcon size={24} className="mr-2" />
        <span className="hidden group-hover:inline transition-all duration-300">¡Haz tu pedido ahora!</span>
    </a>
    )