    import { Button } from "@/components/ui/button"

    export const FuturePromotions = () => (
    <section className="py-16 bg-yellow-100">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-red-500">Próximamente: ¡Cupones y Descuentos!</h2>
        <p className="text-xl mb-10 text-gray-700">Mantente atento a nuestras próximas promociones y ofertas especiales.</p>
        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300">
            Suscríbete para notificaciones
        </Button>
        </div>
    </section>
    )