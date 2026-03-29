import { config } from "jcc-express-mvc";

const appBase = (): string => {
  let u = String(config.get("APP_URL", "") ?? "")
    .trim()
    .replace(/\/$/, "");
  if (!u) u = "http://localhost:5500";
  if (!/^https?:\/\//i.test(u)) u = `http://${u}`;
  return u;
};

export const defaultRedirect = (path: string): string => {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${appBase()}${p}`;
};
