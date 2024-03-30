import { whatsAppPhone } from "conf"

type socialNetworkTag = 'facebook' | 'instagram' | 'tiktok' | 'whatsapp'

interface socialNetworks {
    name: string,
    url: string,
    tag: socialNetworkTag
}

export const socialNetworks: socialNetworks[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/SnowmilkTeas/',
        tag: 'facebook'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/snowmilk_teas/?hl=es',
        tag: 'instagram'
    },
    {
        name: 'WhatsApp',
        url: `https://api.whatsapp.com/send?phone=${import.meta.env.PUBLIC_WHATSAPP_PHONE || ''}&text=%C2%A1Bienvenido!%20Cont%C3%A1ctanos`,
        tag: 'whatsapp'
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@snowmilk_teas',
        tag: 'tiktok'
    }
]