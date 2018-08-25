import { PotionsModule } from './potions.module';

describe('PotionsModule', () => {
  let potionsModule: PotionsModule;

  beforeEach(() => {
    potionsModule = new PotionsModule();
  });

  it('should create an instance', () => {
    expect(potionsModule).toBeTruthy();
  });
});
