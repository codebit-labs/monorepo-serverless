import { Container, ContainerModule } from "inversify";
import { MonoRepoCore } from "@codebit-labs/monorepo-core";

import { Base } from "./base";
import { BaseUtils } from "./utils/base.utils";
import { Repository } from "./repository";
import { Symbols } from "./symbols";

const container = new Container();
const module = new ContainerModule((bind) => {
  bind(Symbols.Base).to(Base);
  bind(Symbols.BaseUtils).to(BaseUtils);
  bind(Symbols.Repository).to(Repository);
});
container.load(MonoRepoCore.container, module);

export { container };
