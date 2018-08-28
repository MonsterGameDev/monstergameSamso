export interface Weapon {
    id?: number;
    weaponName: string;
    weaponStats: WeaponStats;
    weaponLevel?: number;
    weaponBaseDamage?: number;
    imageUrl: string;
}

export interface WeaponState {
    selectedWeaponId?: number;
    weapons: Weapon[];
    showImage: boolean;
    error?: string;
}

export interface WeaponStats {
    power?: number;
    defence?: number;
    damage?: number;
}
