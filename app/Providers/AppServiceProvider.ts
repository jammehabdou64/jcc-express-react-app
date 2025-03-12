import { Container } from "jcc-express-mvc/core/Container";
import { ServiceProvider } from "jcc-express-mvc/lib/Services/ServiceProvider";

export class AppServiceProvider extends ServiceProvider {
  constructor(app: Container) {
    super(app);
  }

  public register(): void {}

  public boot(): void {}
}
