import { ArmorState } from './armor/+state/armor.interfaces';
import { WeaponState } from './weapons/+state/weapons.interfaces';

export interface AppState {
    armor: ArmorState;
    weapon: WeaponState;
}
