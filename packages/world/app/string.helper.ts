import {
  MonoRepoCore,
  StringHelper as MrStringHelper,
} from "@codebit-labs/monorepo-core";
import { provide } from "inversify-binding-decorators";
// import { provide } from "inversify-binding-decorators";

/**
 * If I import the file of this manner `import 'path'` the container find
 * the injector and build local providers but is unable to rebind
 * references of injectors
 *
 * @export
 * @class StringHelper
 * @extends {MrStringHelper}
 */
@provide(MonoRepoCore.symbols.StringHelper)
export class StringHelper extends MrStringHelper {
  public toInt(subject: string): number {
    console.log("Now overwrite with provider decorator");
    return super.toInt(subject);
  }
}
