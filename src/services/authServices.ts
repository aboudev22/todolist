export async function fectUserWithToken(token: string) {
  const res = await fetch(`${import.meta.env.BASE_URL}`, {
    headers: {
      Autorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Token invalid ou expirer");
  return res.json();
}
