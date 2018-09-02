export interface Armor {
    id?: number;
    armorName: string;
    armorLevel: number;
    armorType: ArmorTypeEnum;
    armorStats: Stats;
    imgUrl: string;
}

export enum ArmorTypeEnum {
    None = 'None',
    Head= 'Head',
    Shoulder= 'Shoulder',
    Neck= 'Neck',
    Arm= 'Arm',
    Hand= 'Hand',
    Torso= 'Torso',
    Waist= 'Waist',
    Leg= 'Leg',
    Foot= 'Foot'
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
    showDetails: boolean;
}
