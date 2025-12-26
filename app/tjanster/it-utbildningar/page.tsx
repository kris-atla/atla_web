import type { Metadata } from 'next'
import ItUtbildningarClient from './ItUtbildningarClient'

export const metadata: Metadata = {
    title: 'IT-Utbildningar för Företag',
    description: 'Praktiska utbildningar inom programmering, IT-säkerhet, AI och molnplattformar. Anpassade för att stärka ert teams kompetens.',
    alternates: {
        canonical: '/tjanster/it-utbildningar',
    },
}

export default function Page() {
    return <ItUtbildningarClient />
}
