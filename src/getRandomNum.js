export default function generatorNums(max = 50, min = 0) {
  const randomized = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomized;
}
