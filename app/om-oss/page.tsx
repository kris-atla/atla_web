import type { Metadata } from 'next'
import OmOssClient from './OmOssClient'

export const metadata: Metadata = {
    title: 'Om Oss',
    description: 'Vi är ingenjörer i grunden, problemlösare i själen. Läs om ATLA och vår filosofi kring hållbar och transparent IT-konsulting.',
    alternates: {
        canonical: '/om-oss',
    },
}

export default function Page() {
    return <OmOssClient />
}
