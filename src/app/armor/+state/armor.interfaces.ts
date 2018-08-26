export interface Armor {
    id?: number;
    armorName: string;
    armorLevel: number;
    armorType: ArmorTypeEnum;
    armorStats: Stats;
    imgUrl: string;
}

export enum ArmorTypeEnum {
    None = 'None'
}

export interface Stats {
    health: number;
    power: number;
    defense: number;
}

export interface ArmorState {
    showImage: boolean;
    armor: Armor[];
    selectedArmorId: number;
    error: string;
}
