import { provide } from "inversify-binding-decorators";

import { Symbols } from "./symbols";

@provide(Symbols.TokenHelper)
export class TokenHelper {
  public validate(_token: string): boolean {
    return true;
  }
}
