export interface Potion {
    id?: number;
    potionName: string;
    potionStrength: number;
    potionEffectDuration: number;
    potionEffectType: PotionEffectTypeEnum;
    imageUrl: string;
}

export interface PotionState {
    selectedPotionId: number;
    potions: Potion[];
    showDetails: boolean;
    error: string;
}

export enum PotionEffectTypeEnum {
    Power = 'Power',
    Defense = 'Defense',
    Health = 'Health',
    None = 'None'
}

