export async function getMember(id: string) {
  const res = await fetch(`https://anapioficeandfire.com/api/characters/${id}`);

  if (!res.ok) {
    throw new Error(`API error: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}
