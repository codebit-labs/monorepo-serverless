import { provide } from "inversify-binding-decorators";

import { Symbols } from "../app/symbols";

@provide(Symbols.StringHelper)
export class StringHelper {
  public toInt(subject: string): number {
    return parseInt(subject);
  }
}
