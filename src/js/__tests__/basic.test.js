import lifeAlarm from '../lifeAlarm';

test('Уровень жизни героя меньше 15', () => {
  const hero1 = {
    name: 'vasa',
    health: '10',
  };

  const result = lifeAlarm(hero1);

  expect(result).toBe('critical');
});

test('Уровень жизни героя больше 15 и меньше 50', () => {
  const hero2 = {
    name: 'вова',
    health: '40',
  };

  const result = lifeAlarm(hero2);

  expect(result).toBe('wounded');
});

test('Уровень жизни героя больше 50', () => {
  const hero3 = {
    name: 'Валентин',
    health: '100',
  };

  const result = lifeAlarm(hero3);

  expect(result).toBe('healthy');
});
