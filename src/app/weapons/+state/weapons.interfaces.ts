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
    showDetails: boolean;
    error?: string;
}

export interface WeaponStats {
    power?: number;
    defense?: number;
    damage?: number;
}
