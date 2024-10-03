// TODO: write your code here

export const getHealth = (healfObj) => {
  const healthy = "healthy";
  const wounded = "wounded";
  const critical = "critical";

  return healfObj.health > 50
    ? healthy
    : healfObj.health < 50 && healfObj.health > 15
    ? wounded
    : healfObj.health < 15
    ? critical
    : null;
};

console.log(getHealth({ name: "Маг", health: 90 }));
