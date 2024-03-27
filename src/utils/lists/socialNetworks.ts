interface socialNetworks {
    [key: string]: {
        name: string,
        url: string
    }
}

export const socialNetworks: socialNetworks = {
    facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/SnowmilkTeas/'
    },
    instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/snowmilk_teas/?hl=es'
    },
    whatsapp: {
        name: 'WhatsApp',
        url: `https://api.whatsapp.com/send?phone=${import.meta.env.PUBLIC_WHATSAPP_PHONE || ''}&text=%C2%A1Bienvenido!%20Cont%C3%A1ctanos`
    },
    tiktok: {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@snowmilk_teas'
    }
}