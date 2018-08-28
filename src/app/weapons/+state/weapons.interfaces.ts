export interface Weapon {
    weaponName: string;
    weaponStats: WeaponStatsEnum;
    weaponLevel: number;
    weaponBaseDamage: number;
    imageUrl: string;
}

export interface WeaponState {
    selectedWeapon: Weapon;
    weapons: Weapon[];
    showImage: boolean;
    error: string;
}

export enum WeaponStatsEnum {
    None = 'None'
}
