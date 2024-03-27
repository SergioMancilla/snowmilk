type appearsIn = 'header' | 'footer'

interface SitePath {
    name: string,
    url: string,
    appearsIn: appearsIn[]
}

export const sitePaths: SitePath[] = [
    {
        name: 'Inicio',
        url: '/',
        appearsIn: ['header', 'footer']
    },
    {
        name: 'Franquicias',
        url: '/franchises',
        appearsIn: ['header', 'footer']
    },
    {
        name: 'Sobre nosotros',
        url: '/about',
        appearsIn: ['header', 'footer']
    },
    {
        name: 'Contáctanos',
        url: '/contact',
        appearsIn: ['header', 'footer']
    }
]