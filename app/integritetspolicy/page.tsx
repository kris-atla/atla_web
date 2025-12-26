import type { Metadata } from 'next'
import IntegritetspolicyClient from './IntegritetspolicyClient'

export const metadata: Metadata = {
    title: 'Integritetspolicy',
    description: 'Information om hur ATLA AB hanterar personuppgifter, cookies och din integritet.',
    alternates: {
        canonical: '/integritetspolicy',
    },
}

export default function Page() {
    return <IntegritetspolicyClient />
}
