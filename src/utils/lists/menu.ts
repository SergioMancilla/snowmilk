export interface Menu {
    title: string,
    description: string,
    imgUrl: string,
    price: number
}

export const drinkMenu: Menu[] = [
    {
        title: 'Bobba coffee',
        description: 'Bebida de café con tapioca',
        imgUrl: '/src/bobba_coffee.png',
        price: 98.00
    }
]

export const foodMenu: Menu[] = [

]

export const sweetMenu: Menu[] = [

]

export const fullMenu: Menu[] = [
    ...drinkMenu,
    ...foodMenu,
    ...sweetMenu
]