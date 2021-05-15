export default function getText() {
  return fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=10")
    .then((res) => res.json())
    .then((res) => res[0]);
}
