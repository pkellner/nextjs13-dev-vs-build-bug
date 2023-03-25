const delay = (ms: number) => {
  console.log("delay:",ms)
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getDateAndTimeDelayed() {
  await delay(2000);
  return new Date().toDateString();
}

export default async function HeaderDemo() {
  const now = await getDateAndTimeDelayed();
  return <div>on {now}</div>;
}
