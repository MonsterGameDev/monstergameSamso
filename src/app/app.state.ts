import { ArmorState } from './armor/+state/armor.interfaces';
import { WeaponState } from './weapons/+state/weapons.interfaces';
import { PotionState } from './potions/+state/potions.interfaces';

export interface AppState {
    armor: ArmorState;
    weapons: WeaponState;
    potions: PotionState;
}
