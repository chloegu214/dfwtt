import { cn } from './utils';

describe('cn', () => {
  test('combines class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  test('handles duplicate and falsy values', () => {
    expect(cn('a', undefined, false, '', null, 'b')).toBe('a b');
    expect(cn('text-sm', 'text-lg')).toBe('text-lg');
  });
});
