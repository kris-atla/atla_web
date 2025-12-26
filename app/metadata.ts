import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        template: '%s | ATLA AB',
        default: 'ATLA AB - IT-konsulter inom Automation & Webbutveckling',
    },
    description: 'ATLA AB hjälper företag med skräddarsydda digitala lösningar, affärssystem, hemsidor och processautomatisering. Vi är din partner för digital tillväxt.',
    authors: [{ name: 'ATLA AB', url: 'https://atlaconsult.se' }],
    creator: 'ATLA AB',
    publisher: 'ATLA AB',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

}
