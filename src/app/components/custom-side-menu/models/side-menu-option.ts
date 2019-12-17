export interface SideMenuOption {
    iconName?: string;
    displayText: string;
    url?: string;
    expanded: boolean;
    badge?: number;
    selected?: boolean;
    subOptions?: Array<SubSideMenuOption>;
    hasChild: boolean;
}

export interface SubSideMenuOption {
    iconName?: string;
    displayText: string;
    badge?: number;
    url: string;
}

