export default function TagsAPI() {
  return fetch('data/terms.json').then((data) => data.json());
}
