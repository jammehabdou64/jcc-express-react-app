import { app } from "./bootstrap/app";

const kernel = app.resolve<any>("ConsoleKernel");

kernel.parse(process.argv);
