export interface Weapon {
    id?: number;
    weaponName: string;
    weaponStats: WeaponStatsEnum;
    weaponLevel: number;
    weaponBaseDamage: number;
    imageUrl: string;
}

export interface WeaponState {
    selectedWeaponId?: number;
    weapons: Weapon[];
    showImage: boolean;
    error?: string;
}

export enum WeaponStatsEnum {
    None = 'None'
}
