import {
  LogHelper as MrLogHelper,
  MonoRepoCore,
} from "@codebit-labs/monorepo-core";
import { provide } from "inversify-binding-decorators";

@provide(MonoRepoCore.symbols.LogHelper)
export class LogHelper extends MrLogHelper {
  public log(subject: string): void {
    console.log("Overwrite mr log helper");
    super.log(subject);
  }
}
