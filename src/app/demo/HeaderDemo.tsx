function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

async function getRandomNumber() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const randomInt = getRandomInt(1000,3000);
  return randomInt;
}

export default async function HeaderDemo() {
  const num = await getRandomNumber();
  return <div>Random Number:{num}</div>;
}
