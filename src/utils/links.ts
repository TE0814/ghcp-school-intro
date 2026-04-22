export const addBase = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalized = path === '/' ? '' : path.replace(/^\/+/, '');
  return `${base}${normalized}`;
};

export const removeBase = (pathname: string) => {
  const base = import.meta.env.BASE_URL;
  if (pathname.startsWith(base)) {
    const sliced = pathname.slice(base.length);
    return `/${sliced}`.replace(/\/\/+/, '/');
  }
  return pathname;
};