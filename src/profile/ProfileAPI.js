export default function ProfileAPI() {
  return fetch('data/profile.json').then((data) => data.json());
}
