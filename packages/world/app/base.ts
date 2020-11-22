import { inject, injectable } from "inversify";

import { BaseUtils } from "./utils/base.utils";
import { Symbols } from "./symbols";

@injectable()
export class Base {
  @inject(Symbols.BaseUtils)
  private utils!: BaseUtils;

  public dispatch(): string {
    return this.utils.hello();
  }
}
