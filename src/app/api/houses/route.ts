export async function getHouses() {
  const res = await fetch("https://anapioficeandfire.com/api/houses");

  if (!res.ok) {
    throw new Error(`API error: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}
