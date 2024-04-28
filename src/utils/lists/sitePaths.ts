type appearsIn = 'header' | 'footer'

interface SitePath {
    tag: string,
    name: string,
    url: string,
    appearsIn: appearsIn[]
}

/*
The urls and names can be changed but the tag doesn't bacause it's fundamental keep the paths correctly
*/
export const sitePaths: SitePath[] = [
    {
        tag: 'home',
        name: 'Inicio',
        url: '/',
        appearsIn: ['header', 'footer']
    },
    {
        tag: 'franchises',
        name: 'Franquicias',
        url: '/franchises',
        appearsIn: ['header', 'footer']
    },
    {
        tag: 'about',
        name: 'Sobre nosotros',
        url: '/about',
        appearsIn: ['header', 'footer']
    },
    {
        tag: 'contact',
        name: 'Contáctanos',
        url: '/contact',
        appearsIn: ['footer']
    },
    {
        tag: 'menu',
        name: 'Menú',
        url: '/menu',
        appearsIn: ['header']
    },
    {
        tag: 'social',
        name: 'Redes sociales',
        url: '/social',
        appearsIn: []
    },
    {
        tag: 'site',
        name: 'Lugar',
        url: '/site',
        appearsIn: []
    }
]

export function getSitePath (name: typeof sitePaths[number]['tag']) {
    return sitePaths.find(site => site.tag === name)?.url
}