import { Commune.Schema } from './commune.schema';

describe('Commune.Schema', () => {
  it('should be defined', () => {
    expect(new Commune.Schema()).toBeDefined();
  });
});
