import { Route } from "jcc-express-mvc/Core";

import { AuthController } from "@Controllers/AuthController";
import { Auth } from "jcc-express-mvc";

Route.get("/", () => {
  return inertia("Index");
});

Route.middleware("guest").get("/login", () => inertia("Auth/Login"));

Route.middleware("guest").get("/register", () => inertia("Auth/Register"));

Route.middleware(["auth"]).get("/home", () => {
  return inertia("Home");
});

Route.prefix("/auth").group((Route) => {
  Route.post("/login", [AuthController, "login"]);
  Route.post("/register", [AuthController, "register"]);
});

Route.get("/logout", () => Auth.logout());
