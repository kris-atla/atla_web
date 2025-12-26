import type { Metadata } from 'next'
import KontaktClient from './KontaktClient'

export const metadata: Metadata = {
    title: 'Kontakta Oss',
    description: 'Hör av er till oss för ett förutsättningslöst samtal. Vi hjälper er med affärssystem, hemsidor och AI-lösningar.',
    alternates: {
        canonical: '/kontakt',
    },
}

export default function Page() {
    return <KontaktClient />
}
