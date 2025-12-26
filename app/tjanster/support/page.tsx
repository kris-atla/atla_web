import type { Metadata } from 'next'
import SupportClient from './SupportClient'

export const metadata: Metadata = {
    title: 'IT Support & Förvaltning',
    description: 'Snabb och professionell IT-support, drift och förvaltning. Vi säkerställer att era system fungerar så ni kan fokusera på verksamheten.',
    alternates: {
        canonical: '/tjanster/support',
    },
}

export default function Page() {
    return <SupportClient />
}
