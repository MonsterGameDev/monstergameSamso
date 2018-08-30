export interface Potion {
    id?: number;
    potionName: string;
    potionStrength: number;
    potionEffectDuration: number;
    potionEffectType: PotionEffectTypeEnum;
}

export interface PotionState {
    selectedPotionId: number;
    potions: Potion[];
    showImage: boolean;
    error: string;
}

export enum PotionEffectTypeEnum {
    Power = 'Power',
    Defense = 'Defense',
    Health = 'Health',
    None = 'None'
}

