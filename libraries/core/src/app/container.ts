import { ContainerModule } from "inversify";

import { ObjectHelper } from "../helpers/object.helper";
import { Symbols } from "./symbols";

const monoRepoCoreContainer = new ContainerModule((bind) => {
  bind(Symbols.ObjectHelper).to(ObjectHelper);
});

export const MonoRepoCore = {
  container: monoRepoCoreContainer,
  symbols: Symbols,
};
