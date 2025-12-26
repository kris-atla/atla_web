import type { Metadata } from 'next'
import DigitalaLosningarClient from './DigitalaLosningarClient'

export const metadata: Metadata = {
    title: 'Digitala Lösningar & Affärssystem',
    description: 'Vi bygger skräddarsydda affärssystem, CRM, CMS och snabba hemsidor anpassade efter era behov. Inga standardlösningar, bara verktyg som fungerar.',
    alternates: {
        canonical: '/tjanster/digitala-losningar',
    },
}

export default function Page() {
    return <DigitalaLosningarClient />
}
