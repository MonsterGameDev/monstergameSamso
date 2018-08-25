import { WeaponsModule } from './weapons.module';

describe('WeaponsModule', () => {
  let weaponsModule: WeaponsModule;

  beforeEach(() => {
    weaponsModule = new WeaponsModule();
  });

  it('should create an instance', () => {
    expect(weaponsModule).toBeTruthy();
  });
});
