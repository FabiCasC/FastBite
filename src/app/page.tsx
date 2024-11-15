    import { Banner } from '@/components/Banner'
    import { AboutUs } from '@/components/AboutUs'
    import { ComboGallery } from '@/components/ComboGallery'
    import { TikTokSection } from '@/components/TikTokSection'
    import { FuturePromotions } from '@/components/FuturePromotions'
    import { WhatsAppButton } from '@/components/WhatsAppButton'

    export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
        <Banner />
        <AboutUs />
        <ComboGallery />
        <TikTokSection />
        <FuturePromotions />
        <WhatsAppButton />
        </div>
    )
    }