export async function getVans() {
  const res = await fetch('/api/van2s');

  if (!res.ok) {
    throw new Error({
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    });
  }

  const data = await res.json();
  return data.vans;
}
