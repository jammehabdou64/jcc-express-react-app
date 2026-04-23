import { cors } from "./cors";
import { database } from "./database";
import { engine } from "./engine";
import { queue } from "./queue";
import { rateLimit } from "./rate-limit";
import { service } from "./service";
import { session } from "./session";
import { cache } from "./cache";

export const config = {
  engine,
  rateLimit,
  cors,
  database,
  queue,
  service,
  session,
  cache,
};
