import { District.Schema } from './district.schema';

describe('District.Schema', () => {
  it('should be defined', () => {
    expect(new District.Schema()).toBeDefined();
  });
});
