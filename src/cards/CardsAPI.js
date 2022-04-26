export default function CardsAPI() {
  return fetch('data/cards.json').then((data) => data.json());
}
