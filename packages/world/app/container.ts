import { buildProviderModule } from "inversify-binding-decorators";
import { Container, ContainerModule } from "inversify";
import { MonoRepoCore } from "@codebit-labs/monorepo-core";

import { Base } from "./base";
import { BaseUtils } from "./utils/base.utils";
import { DateHelper, StringHelper } from "./../app";
import { Repository } from "./repository";
import { Symbols } from "./symbols";

const container = new Container();
const module = new ContainerModule((bind, _unbind, _isboud, rebind) => {
  bind(Symbols.Base).to(Base);
  bind(Symbols.BaseUtils).to(BaseUtils);
  bind(Symbols.Repository).to(Repository);
  rebind(MonoRepoCore.symbols.DateHelper).to(DateHelper);
  rebind(MonoRepoCore.symbols.StringHelper).to(StringHelper);
});
container.load(MonoRepoCore.container, buildProviderModule(), module);

export { container };
