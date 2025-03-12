import { ConsoleKernel } from "jcc-express-mvc/core/cli";
import { app } from "jcc-express-mvc/core/Dependency";

app.singleton<ConsoleKernel>("ConsoleKernel", () => new ConsoleKernel());

export { app };
