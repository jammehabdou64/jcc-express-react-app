import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import { auth, guest } from "jcc-express-mvc";
import { inertia } from "jcc-express-mvc/Core/Inertia";

export class Kernel {
  //

  public middlewares = [
    cookieParser(),
    session({
      secret: process.env.SESSION_SECRET || "JCCC____",
      resave: false,
      saveUninitialized: false,
    }),
    flash(),
    fileUpload(),
    inertia({ rootView: "index", ssr: true }),
  ];

  public middlewareAliases = {
    auth,
    guest,
  };
}
