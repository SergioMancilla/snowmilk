export interface MenuItem {
    label: string;
    clickable: boolean;
    link?: string;
    submenu?: MenuItem[];

}

export const headerMenu = [
    {
        lablel: 'Home',
    }
]