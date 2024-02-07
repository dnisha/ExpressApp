function getRandomValue(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function doSomeHeavyTask() {
  const ms = getRandomValue([100, 150, 200, 300, 600, 500, 1000, 1400, 2500]);
  const shouldThrowError = getRandomValue([1, 2, 3, 4, 5, 6, 7, 8]) === 8;
  if (shouldThrowError) {
    const randomError = getRandomValue([
      "DB payment failure",
      "DB server is down",
      "Access denied",
      "Not found error",
    ]);
      throw new Error(randomError);
  }
    return new Promise((resolve , reject ) => setTimeout(() => resolve(ms), ms))
}

module.exports = { doSomeHeavyTask };
