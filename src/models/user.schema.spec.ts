import { User.Schema } from './user.schema';

describe('User.Schema', () => {
  it('should be defined', () => {
    expect(new User.Schema()).toBeDefined();
  });
});
