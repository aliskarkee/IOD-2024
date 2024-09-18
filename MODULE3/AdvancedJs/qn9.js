function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000;

    if (delay % 2 === 0) {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });
}

randomDelay()
  .then((delay) => console.log(`There appears to have been a delay of ${delay} ms.`))
  .catch((delay) => console.log(`Delay of ${delay} ms was unsuccessful.`));
