import { CustomHttpException } from './custom-http-exception';

describe('CustomHttpException', () => {
  it('should be defined', () => {
    expect(new CustomHttpException()).toBeDefined();
  });
});
