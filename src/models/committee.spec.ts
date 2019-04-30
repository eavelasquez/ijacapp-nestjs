import { Committee } from './committee.schema';

describe('Committee', () => {
  it('should be defined', () => {
    expect(new Committee()).toBeDefined();
  });
});
