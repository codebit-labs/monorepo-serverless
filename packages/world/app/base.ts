import { inject, injectable } from "inversify";
import {
  MonoRepoCore,
  DateHelper,
  LogHelper,
  StringHelper,
} from "@codebit-labs/monorepo-core";

import { BaseUtils } from "./utils/base.utils";
import { container } from "./container";
import { Symbols } from "./symbols";
import { TokenHelper } from "./token.helper";

@injectable()
export class Base {
  @inject(Symbols.BaseUtils)
  private utils!: BaseUtils;

  public dispatch(): string {
    const dateHelper = container.get<DateHelper>(
      MonoRepoCore.symbols.DateHelper
    );
    const stringHelper = container.get<StringHelper>(
      MonoRepoCore.symbols.StringHelper
    );
    const logHelper = container.get<LogHelper>(MonoRepoCore.symbols.LogHelper);
    const tokenHelper = container.get<TokenHelper>(Symbols.TokenHelper);
    logHelper.log("Log helper");
    console.log(`Validate token: ${tokenHelper.validate("the-random-token")}`);
    console.log(`The date is ${dateHelper.toDate("2011-11-11")}`);
    console.log(`My age is ${stringHelper.toInt("30")}`);
    return this.utils.hello();
  }
}
