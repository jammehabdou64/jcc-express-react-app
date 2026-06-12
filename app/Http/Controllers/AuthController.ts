import { Auth } from "jcc-express-mvc";
import type { HttpContext } from "jcc-express-mvc/lib/Type/HttpContext";
import { Inject, Method } from "jcc-express-mvc/Core/Dependency";
import { AuthRequest } from "@/Request/AuthRequest";

@Inject()
export class AuthController {
  //

  async login({ req, res, next }: HttpContext) {
    return Auth.attempt(next);
  }

  //

  @Method()
  async register({ req, res, next }: HttpContext, authRequest: AuthRequest) {
    const save = await authRequest.save();
    return save
      ? Auth.attempt(next)
      : res.json({ message: "Invalid credentials" });
  }

  //
}
