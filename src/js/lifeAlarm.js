/* eslint-disable linebreak-style */
export default function lifeAlarm(hero) {
  let liveColor = '';
  if (hero.health > 50) {
    liveColor = 'healthy';
  }
  if (hero.health < 50 && hero.health > 15) {
    liveColor = 'wounded';
  }
  if (hero.health < 15) {
    liveColor = 'critical';
  }

  console.log(liveColor);

  return liveColor;
}
