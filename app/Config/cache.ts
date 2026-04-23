import path from "path";
import appRootPath from "app-root-path";
import { config } from "jcc-express-mvc";
import type { CacheConfig } from "jcc-express-mvc/lib/Interface";

export const cache: CacheConfig = {
  default: config.get("CACHE_STORE", "memory"),
  stores: {
    memory: {
      driver: "memory",
    },
    file: {
      driver: "file",
      cacheDir: path.join(
        appRootPath.path,
        config.get("CACHE_PATH", "storage/framework/cache"),
      ),
    },
    redis: {
      driver: "redis",
      host: config.get("REDIS_HOST", "127.0.0.1"),
      port: Number(config.get("REDIS_PORT", "6379")),
      password: config.get("REDIS_PASSWORD", "") || undefined,
      database: Number(config.get("REDIS_CACHE_DB", "1")),
    },
  },
};
