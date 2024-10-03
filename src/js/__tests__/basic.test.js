// import sum from '../basic';

import { getHealth } from "../app";

test('should healthy', () => {
  const result = getHealth({name: 'Маг', health: 90})
  expect(result).toBe('healthy');
});
test('should wounded', () => {
  const result = getHealth({name: 'Маг', health: 30})
  expect(result).toBe('wounded');
});
test('should critical', () => {
  const result = getHealth({name: 'Маг', health: 10})
  expect(result).toBe('critical');
});
