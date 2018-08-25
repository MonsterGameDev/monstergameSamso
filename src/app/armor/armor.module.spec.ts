import { ArmorModule } from './armor.module';

describe('ArmorModule', () => {
  let armorModule: ArmorModule;

  beforeEach(() => {
    armorModule = new ArmorModule();
  });

  it('should create an instance', () => {
    expect(armorModule).toBeTruthy();
  });
});
