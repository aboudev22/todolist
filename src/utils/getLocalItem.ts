export const getlocalItem = (item: string): string => {
  const el = localStorage.getItem(item);
  if (!el) return "";
  return item;
};
