import { defaultRedirect } from "app/helper";
import { config } from "jcc-express-mvc";

/**
 * Env: `{PROVIDER}_CLIENT_ID`, `{PROVIDER}_CLIENT_SECRET`, optional `{PROVIDER}_REDIRECT_URI`.
 */
export const service = {
  social: {
    google: {
      client_id: config.get("GOOGLE_CLIENT_ID", ""),
      client_secret: config.get("GOOGLE_CLIENT_SECRET", ""),
      redirect:
        config.get("GOOGLE_REDIRECT_URI", "") ||
        defaultRedirect("/auth/google/callback"),
    },
    github: {
      client_id: config.get("GITHUB_CLIENT_ID", ""),
      client_secret: config.get("GITHUB_CLIENT_SECRET", ""),
      redirect:
        config.get("GITHUB_REDIRECT_URI", "") ||
        defaultRedirect("/auth/github/callback"),
    },
    facebook: {
      client_id: config.get("FACEBOOK_CLIENT_ID", ""),
      client_secret: config.get("FACEBOOK_CLIENT_SECRET", ""),
      redirect:
        config.get("FACEBOOK_REDIRECT_URI", "") ||
        defaultRedirect("/auth/facebook/callback"),
    },
    gitlab: {
      url: String(
        config.get("GITLAB_URL", "https://gitlab.com") ?? "https://gitlab.com",
      ).replace(/\/$/, ""),
      client_id: config.get("GITLAB_CLIENT_ID", ""),
      client_secret: config.get("GITLAB_CLIENT_SECRET", ""),
      redirect:
        config.get("GITLAB_REDIRECT_URI", "") ||
        defaultRedirect("/auth/gitlab/callback"),
    },
    twitter: {
      client_id: config.get("TWITTER_CLIENT_ID", ""),
      client_secret: config.get("TWITTER_CLIENT_SECRET", ""),
      redirect:
        config.get("TWITTER_REDIRECT_URI", "") ||
        defaultRedirect("/auth/twitter/callback"),
    },
    slack: {
      client_id: config.get("SLACK_CLIENT_ID", ""),
      client_secret: config.get("SLACK_CLIENT_SECRET", ""),
      redirect:
        config.get("SLACK_REDIRECT_URI", "") ||
        defaultRedirect("/auth/slack/callback"),
    },
  },
};
