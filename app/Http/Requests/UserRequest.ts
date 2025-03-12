import { FormRequest } from "jcc-express-mvc/core/FormRequest";
import { Request } from "jcc-express-mvc/core/http";

export class UserRequest extends FormRequest {
  constructor(req: Request) {
    super(req);
  }

  async rules() {
    await this.apiValidate({
      //
    });
  }

  async save() {
    await this.rules();
  }
}
