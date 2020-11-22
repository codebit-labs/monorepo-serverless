import { provide } from "inversify-binding-decorators";

import { Symbols } from "../app/symbols";

@provide(Symbols.DateHelper)
export class DateHelper {
  public toDate(subject: string): Date {
    return new Date(subject);
  }
}
