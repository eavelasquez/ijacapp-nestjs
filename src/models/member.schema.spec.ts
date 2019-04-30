import { Member.Schema } from './member.schema';

describe('Member.Schema', () => {
  it('should be defined', () => {
    expect(new Member.Schema()).toBeDefined();
  });
});
